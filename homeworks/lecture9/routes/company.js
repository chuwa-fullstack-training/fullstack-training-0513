const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const Employee = require('../models/employee');
const mongoose = require('mongoose');

// Get all companies
router.get('/', async function (req, res, next) {
  try {
    const data = await Company.find();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

// Create a new company
router.post('/create', async function (req, res, next) {
  const params = req.body;
  const company = new Company(params);
  try {
    await company.save();
    res.status(200).send(company._id);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

// Get a company by id
router.get('/:id', async function (req, res, next) {
  try {
    const {id} = req.params;
    const ID = new mongoose.Types.ObjectId(id);
    const data = await Company.findById(ID);
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

// Update a company by id
router.patch('/:id', async function (req, res, next) {
  try {
    const {id} = req.params;
    const params = req.body;
    const ID = new mongoose.Types.ObjectId(id);
    await Company.findByIdAndUpdate(ID, params);
    res.status(200).send('Update Success');
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

// Delete a company by id
router.delete('/:id', async function (req, res, next) {
  try {
    const {id} = req.params;
    const ID = new mongoose.Types.ObjectId(id);
    await Company.findByIdAndDelete(ID);
    res.status(200).send('Delete Success');
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

// Get all employees of a company
router.get('/:id/employees', async function (req, res, next) {
  try {
    const {id} = req.params;
    const ID = new mongoose.Types.ObjectId(id);
    const employees = await Employee.find({ company: ID });
    res.status(200).json(employees);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

module.exports = router;
