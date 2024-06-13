const express = require('express');
const companyRouter = express.Router();
const { getAllCompanies, 
    getOneCompany, 
    createCompany, 
    updateCompany, 
    deleteCompany, 
    getCompanyEmployees } = require('../controllers/companyController');

companyRouter.route('/').get(getAllCompanies).post(createCompany);
companyRouter.route('/:id').get(getOneCompany).put(updateCompany).delete(deleteCompany);
companyRouter.route('/:id/employees').get(getCompanyEmployees);

module.exports = companyRouter;