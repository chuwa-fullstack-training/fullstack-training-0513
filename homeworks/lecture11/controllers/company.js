const { Company } = require('../schema');

const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (err) {
        console.log(err.message);
        res.status(500).join({ message: 'Server Error' });
    }
};

const getCompanyById = async (req, res) => {
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
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateConpanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params?.id);

        company.name = req.body.name ?? company.name;
        company.description = req.body.description ?? company.description;
        company.headquarters = req.body.headquarters ?? company.headquarters;
        company.industry = req.body.industry ?? company.industry;

        await company.save();
        res.josn(company);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteCompanyById = async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params?.id);
        res.status(204).json({ message: 'Company deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateConpanyById,
    deleteCompanyById
}