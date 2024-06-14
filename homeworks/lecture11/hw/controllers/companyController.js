const Company = require('../models/Company');
const Employee = require('../models/Employee');

// Create a new company
exports.createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).send(company);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get a company by ID
exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).send();
        }
        res.send(company);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a company by ID
exports.updateCompanyById = async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!company) {
            return res.status(404).send();
        }
        res.send(company);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a company by ID
exports.deleteCompanyById = async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) {
            return res.status(404).send();
        }
        await Employee.updateMany({ company: company._id }, { $unset: { company: "" } });
        res.send(company);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.send(companies);
    } catch (error) {
        res.status(500).send(error);
    }
};
