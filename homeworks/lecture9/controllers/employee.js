const Employee = require('../models/employee');
const mongoose = require("mongoose");
const Company = require("../models/company");

const getAllEmployees = async (req, res) => {
  try {
    if (req.user) {
      const data = await Employee.find();
      res.status(200).json(data);
    } else {
      const data = await Employee.find({}, 'firstName lastName');
      res.status(200).json(data);
    }
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
};

const createEmployee = async (req, res) => {
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
};

const getEmployee = async (req, res) => {
  try {
    const {id} = req.params;
    const ID = new mongoose.Types.ObjectId(id);

    if (req.user) {
      const data = await Employee.findById(ID);
      res.status(200).json(data);
    } else {
      const data = await Employee.findById(ID, 'firstName lastName');
      res.status(200).json(data);
    }
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
};

const updateEmployee = async (req, res) => {
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
};

const deleteEmployee = async (req, res) => {
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
};

module.exports = {
  getAllEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee
}
