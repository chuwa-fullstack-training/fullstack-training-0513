require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const { Company, Employee } = require('./models');

// process.env.SECRET

// Middleware for authenticating JWT tokens
const authenticateToken = async (req, res, next) => {
  const token = req.header('x-auth-token') || req.header('authorization')?.split(' ')[1];

  // if (!token) return res.status(401).json({ error: 'No token, authorization denied' });
  if (!token){
    req.user = null;
    return next();
  }

  try{
    const decoded = await jwt.verify(token, process.env.SECRET);
    // decoded is payload
    req.user = decoded;
    next();
  }
  catch (err){
    res.status(401).json({ error: 'Token is not valid' });
  } 

};

// Login API
router.post('/login', async (req, res) => {
  const { firstName, lastName, password } = req.body;

  try {
    const user = await Employee.findOne({ firstName, lastName });
    if (!user) return res.status(400).json({ error: 'Invalid user' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

    const payload = {
      userId: user._id, 
      companyId: user.company
    };

    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1d' });
    res.json({ token });
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new company
router.post('/companies', async (req, res) => {
  try{
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  }
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create a new employee
router.post('/employees', async (req, res) => {
  try {
    const { password, ...employeeData } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const employee = new Employee({ ...employeeData, password: hashedPassword });
    await employee.save();
    await Company.findByIdAndUpdate(employee.company, {
      $push: { employees: employee._id }
    });
    res.status(201).json(employee);
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get a company by id
router.get('/companies/:id', async (req, res) => {
  try {
    const employees = await Employee.find().populate('company');
    const company = await Company.findById(req.params.id).populate('employees');
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
    } 
    else {
      res.json(company);
    }
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get an employee by id
router.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('company');
    if (!employee) {
      res.status(404).json({ error: 'Employee not found' });
    } 
    else {
      res.json(employee);
    }
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a company by id
router.put('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
    } 
    else {
      res.json(company);
    }
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update an employee by id
router.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) {
      res.status(404).json({ error: 'Employee not found' });
    } 
    else {
      res.json(employee);
    }
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a company by id
router.delete('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
    } 
    else {
      await Employee.deleteMany({ company: company._id });
      res.json({ message: 'Company and its employees deleted' });
    }
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an employee by id
router.delete('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      res.status(404).json({ error: 'Employee not found' });
    } 
    else {
      await Company.findByIdAndUpdate(employee.company, { $pull: { employees: employee._id } });
      res.json({ message: 'Employee deleted' });
    }
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all companies
router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find().populate('employees');
    res.json(companies);
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all employees
router.get('/employees', authenticateToken, async (req, res) => {
  try {
    const employees = await Employee.find().populate('company');
    if (!req.user) {
      const limitedEmployees = employees.map(emp => ({
        firstName: emp.firstName,
        lastName: emp.lastName
      }));
      res.json(limitedEmployees);
    } 
    else {
      const userCompanyId = req.user.companyId.toString();
      const filteredEmployees = employees.map(emp => {
        if (emp.company._id.toString() === userCompanyId) {
          console.log("same");
          return emp;
        } 
        else {
          console.log("diff");
          return {
            firstName: emp.firstName,
            lastName: emp.lastName
          };
        }
      });
      res.json(filteredEmployees);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all employees of a company
router.get('/companies/:id/employees', authenticateToken, async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('employees');
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    if (!req.user || req.user.companyId.toString() !== req.params.id) {
      const limitedEmployees = company.employees.map(emp => ({
        firstName: emp.firstName,
        lastName: emp.lastName
      }));
      res.json(limitedEmployees);
    } 
    else {
      res.json(company.employees);
    }
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;