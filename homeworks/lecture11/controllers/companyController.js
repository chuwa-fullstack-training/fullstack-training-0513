const { Company } = require('../schema');
const auth = require('../middlewares/auth');

module.exports = {
  creatCompany: async (req, res) => {
    try {
      console.log('Request Body:', req.body);
      const company = new Company(req.body);
      await company.save();
      res.status(201).json(company);
    } catch (error) {
      res.status(500).json({error: error.message });
    }
  },

  getCompanyById: async (req, res) => {
    try {
      const company = await Company.findById(req.params.id).populate('employees');
      if (!company) {
        return res.status(404).json({ error: 'Company info cannot be found'});
      }
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  },

  updateCompanyById: async (req, res) => {
    try {
      const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!company) {
        return res.status(404).json({ error: 'Company not found'});
      }
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  },

  deleteCompanyById: async (req, res) => {
    try {
      const company = await Company.findByIdAndDelete(req.params.id);
      if (!company) {
        return res.status(404).json({ error: 'Company not found'});
      }
      res.json({ message: 'Company deleted successfully', deletedCompanyId: req.params.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllCompanies: [auth, async (req, res) => {
    try {
      const companies = await Company.find();
      res.json(companies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }]
};