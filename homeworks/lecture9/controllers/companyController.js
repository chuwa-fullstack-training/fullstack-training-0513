const Company = require('../models/Company');
const Employee = require('../models/Employee');

const getAllCompanies = async (req, res) => {
    try{
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getOneCompany = async (req, res) => {
    try{
        const company = await Company.findById(req.params?.id);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createCompany = async (req, res) => {
    try{
        const { name, description, headquarters, industry } = req.body;
        if (!name || !description || !headquarters || !industry) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }
        const existingCompany = await Company.findOne({ name });
        if (existingCompany) {
            return res.status(400).json({ message: 'Company already exists' });
        }
        const company = new Company(req.body);
        await company.save();
        res.status(201).json({ message: 'Company created' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateCompany = async (req, res) => {
    try{
        const company = await Company.findById(req.params?.id);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        const { name, description, headquarters, industry } = req.body;
        company.name = name ?? company.name;
        company.description = description ?? company.description;
        company.headquarters = headquarters ?? company.headquarters;
        company.industry = industry ?? company.industry;
        await company.save();
        res.status(200).json(company);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteCompany = async (req, res) => {
    try{
        const company = await Company.findById(req.params?.id);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        await Employee.deleteMany({ company: req.params.id });
        
        await Company.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Company deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getCompanyEmployees = async (req, res) => {
    try{
        const company = await Company.findById(req.params?.id).populate('employees');
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(company.employees);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = { getAllCompanies, getOneCompany, createCompany, updateCompany, deleteCompany, getCompanyEmployees };

