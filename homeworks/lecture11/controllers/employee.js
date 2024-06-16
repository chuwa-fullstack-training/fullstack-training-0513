const Company = require('../models/Company');
const Employee = require('../models/Employee');
const bcrypt = require('bcrypt');

const createNewEmployee = async (req, res) => {
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
};

const getEmployeeById = async (req, res) => {
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
};

const updateEmployeeById = async (req, res) => {
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
};

const deleteEmployeeById = async (req, res) => {
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
};

const getAllEmployees = async (req, res) => {
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
          return emp;
        } 
        else {
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
};

module.exports = {
  createNewEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  getAllEmployees
};