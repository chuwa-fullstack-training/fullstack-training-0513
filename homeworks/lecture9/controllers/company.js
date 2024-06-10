const Company = require('../models/company');
const Employee = require('../models/employee');
const mongoose = require('mongoose');

const getAllCompanies = async (req, res) => {
  try {
    const data = await Company.find();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
};

const createCompany = async (req, res) => {
  const params = req.body;
  const company = new Company(params);
  try {
    await company.save();
    res.status(200).send(company._id);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
};

const getCompany = async (req, res) => {
  try {
    const {id} = req.params;
    const ID = new mongoose.Types.ObjectId(id);
    const data = await Company.findById(ID);
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
};

const updateCompany = async (req, res) => {
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
};

const deleteCompany = async (req, res) => {
  try {
    const {id} = req.params;
    const ID = new mongoose.Types.ObjectId(id);
    await Company.findByIdAndDelete(ID);
    res.status(200).send('Delete Success');
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
};

const getEmployeesOfCompany = async (req, res) => {
  try {
    if (!req.user) return res.status(401).send('No token, authorization denied');

    const id = req.user.company
    const ID = new mongoose.Types.ObjectId(id);
    const employees = await Employee.find({ company: ID });
    res.status(200).json(employees);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
};

module.exports = {
  getAllCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  getEmployeesOfCompany
}
