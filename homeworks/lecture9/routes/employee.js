const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const mongoose = require("mongoose");
const Company = require("../models/company");

// Get all employees
router.get('/', async function (req, res, next) {
  try {
    const data = await Employee.find();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

// Create a new employee
router.post('/create', async function (req, res, next) {
  const params = req.body;
  const employee = new Employee(params);
  try {
    await employee.save();

    // update company
    const ID = new mongoose.Types.ObjectId(params.company);
    const company = await Company.findById(ID);
    if (company) {
      company.employees.push(employee._id);
    }
    await company.save();

    res.status(200).send(employee._id);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

// Get an employee by id
router.get('/:id', async function (req, res, next) {
  try {
    const {id} = req.params;
    const ID = new mongoose.Types.ObjectId(id);
    const data = await Employee.findById(ID);
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

// Update an employee by id
router.patch('/:id', async function (req, res, next) {
  try {
    const {id} = req.params;
    const params = req.body;
    const ID = new mongoose.Types.ObjectId(id);
    await Employee.findByIdAndUpdate(ID, params);
    res.status(200).send('Update Success');
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

// Delete an employee by id
router.delete('/:id', async function (req, res, next) {
  try {
    const {id} = req.params;
    const ID = new mongoose.Types.ObjectId(id);
    const employee = await Employee.findByIdAndDelete(ID);

    // delete from company
    if (employee) {
      await Company.findByIdAndUpdate(employee.company, {
        $pull: { employees: employee._id }
      });
    }

    res.status(200).send('Delete Success');
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

module.exports = router;
