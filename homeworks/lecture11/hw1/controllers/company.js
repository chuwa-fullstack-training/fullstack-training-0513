const Company = require('../models/Company');

const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getOneCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params?.id);
        res.status(200).json(company);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json({ message: 'Company created' });
    } catch (error) {
        res.status(400).send(error);
    }
};

const updateCompany = async (req, res) => {
    try {
        // find the company
        const company = await Company.findById(req.params?.id);

        // update the company
        company.name = req.body.name ?? company.name;
        company.description = req.body.description ?? company.description;
        company.headquarters = req.body.headquarters ?? company.headquarters;
        company.industry = req.body.industry ?? company.industry;

        // save the company
        await company.save();
        res.json(company);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteCompany = async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params?.id);
        res.status(204).json({ message: 'Company deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createCompany,
    getAllCompanies,
    getOneCompany,
    updateCompany,
    deleteCompany,
};