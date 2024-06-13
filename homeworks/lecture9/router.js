const express = require('express');
const router = express.Router();
const { Company, Employee } = require('./models');

// Create a new company
router.post('/companies', async (req, res) => {
  try{
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  }
  catch (err) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new employee
router.post('/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
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
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find().populate('company');
    res.json(employees);
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all employees of a company
router.get('/companies/:id/employees', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('employees');
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
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