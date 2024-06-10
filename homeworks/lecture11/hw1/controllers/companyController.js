const { asyncHandler } = require("../middleware/asyncHandler.js");
const Company = require("../models/companyModel");
const Employee = require("../models/employeeModel");

const getAllCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find({});
  res.status(200).json(companies);
});

const getCompanyById = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (company) {
    res.status(200).json(company);
  } else {
    res.status(404);
    throw new Error("Company not found");
  }
});

const getEmployeesByCompanyId = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id).populate("employees");
  if (!company) {
    res.status(404);
    throw new Error("Company not found");
  }

  let employees;
  if (req.user && req.user.company.toString() === req.params.id) {
    employees = company.employees;
  } else {
    employees = company.employees.map((e) => ({
      firstName: e.firstName,
      lastName: e.lastName,
    }));
  }

  res.status(200).json(employees);
});

const createCompany = asyncHandler(async (req, res) => {
  const { name, description, headquarters, industry } = req.body;
  const companyExists = await Company.findOne({ name });
  if (companyExists) {
    res.status(400);
    throw new Error("Company already exists");
  }
  const company = await Company.create({
    name,
    description,
    headquarters,
    industry,
  });

  if (company) {
    res.status(201).json(company);
  } else {
    res.status(400);
    throw new Error("Invalid company data");
  }
});

const updateCompany = asyncHandler(async (req, res) => {
  const { name, description, headquarters, industry } = req.body;

  let company = await Company.findById(req.params.id);
  if (!company) {
    res.status(404);
    throw new Error("Company not found");
  }

  company.name = name || company.name;
  company.description = description || company.description;
  company.headquarters = headquarters || company.headquarters;
  company.industry = industry || company.industry;

  company = await company.save();

  res.status(200).json(company);
});

const deleteCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) {
    res.status(404).json({ message: "Company not found" });
  }

  const employees = await Employee.find({ company: company._id });

  for (const employee of employees) {
    employee.company = null;
    await employee.save();
  }

  await Company.findByIdAndDelete(company._id);
  res.status(200).json({ message: "Company deleted" });
});

module.exports = {
  getAllCompanies,
  getCompanyById,
  getEmployeesByCompanyId,
  createCompany,
  updateCompany,
  deleteCompany,
};
