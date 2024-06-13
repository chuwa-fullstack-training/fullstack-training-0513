const express = require('express');
const companyRouter = express.Router();
const { getAllCompanies, 
    getOneCompany, 
    createCompany, 
    updateCompany, 
    deleteCompany, } = require('../controllers/companyController');
    const { authenticate } = require('./middleware/authMiddleware');

companyRouter.route('/').get(getAllCompanies).post(createCompany);
companyRouter.route('/:id').get(getOneCompany).put(updateCompany).delete(deleteCompany);

module.exports = companyRouter;