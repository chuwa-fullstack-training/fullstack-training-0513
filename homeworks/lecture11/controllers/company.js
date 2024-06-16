const Company = require('../models/Company');
const Employee = require('../models/Employee');

const createNewCompany = async (req, res) => {
  try{
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  }
  catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getCompanyById = async (req, res) => {
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
};

const updateCompanyById = async (req, res) => {
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
};

const deleteCompanyById = async (req, res) => {
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
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate('employees');
    res.json(companies);
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllEmployeesOfOneCompany = async (req, res) => {
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
};

module.exports = {
  createNewCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getAllCompanies,
  getAllEmployeesOfOneCompany
};