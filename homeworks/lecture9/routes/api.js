const express = require('express');
const router = express.Router();
const Company = require('../Company');
const Employee = require('../Employee');




router.post('/companies', async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('_employees');
    if (!company) res.status(404).send("Company not found");
    else res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('company');
    if (!employee) res.status(404).send("Employee not found");
    else res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.put('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.delete('/companies/:id', async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.delete('/employees/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/companies/:id/employees', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('_employees');
    if (!company) res.status(404).send("Company not found");
    else res.json(company._employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
