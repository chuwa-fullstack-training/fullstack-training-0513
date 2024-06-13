const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.post('/', companyController.createCompany);
router.get('/:id', companyController.getCompanyById);
router.put('/:id', companyController.updateCompanyById);
router.delete('/:id', companyController.deleteCompanyById);
router.get('/', companyController.getAllCompanies);

module.exports = router;
