// routes/companies.js
const express = require('express');
const Company = require('../models/Company');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

// 获取所有公司
router.get('/', authenticateToken, async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

// 获取公司ID
router.get('/:id', authenticateToken, async (req, res) => {
  const company = await Company.findById(req.params.id).populate('employees');
  if (!company) return res.status(404).send('Company not found');
  
  res.json(company);
});

// 创建新公司
router.post('/', authenticateToken, async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.status(201).json(company);
});

// 更新公司
router.put('/:id', authenticateToken, async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!company) return res.status(404).send('Company not found');
  
  res.json(company);
});

// 删除公司
router.delete('/:id', authenticateToken, async (req, res) => {
  const company = await Company.findByIdAndDelete(req.params.id);
  if (!company) return res.status(404).send('Company not found');
  
  res.status(204).send();
});

module.exports = router;

// routes/employees.js
const express = require('express');
const Employee = require('../models/Employee');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

// 获取所有员工
router.get('/', authenticateToken, async (req, res) => {
  const employees = await Employee.find();
  
  if (req.user) {
    res.json(employees);
  } else {
    res.json(employees.map(emp => ({ firstName: emp.firstName, lastName: emp.lastName })));
  }
});

// 获取员工ID
router.get('/:id', authenticateToken, async (req, res) => {
  const employee = await Employee.findById(req.params.id).populate('company manager');
  if (!employee) return res.status(404).send('Employee not found');
  
  res.json(employee);
});

// 创建新员工
router.post('/', authenticateToken, async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).json(employee);
});

// 更新员工
router.put('/:id', authenticateToken, async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!employee) return res.status(404).send('Employee not found');
  
  res.json(employee);
});

// 删除员工
router.delete('/:id', authenticateToken, async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  if (!employee) return res.status(404).send('Employee not found');
  
  res.status(204).send();
});

// 获取公司所有员工
router.get('/company/:companyId', authenticateToken, async (req, res) => {
  if (req.user.company !== req.params.companyId) return res.status(403).send('Forbidden');
  
  const employees = await Employee.find({ company: req.params.companyId });
  res.json(employees);
});

module.exports = router;
