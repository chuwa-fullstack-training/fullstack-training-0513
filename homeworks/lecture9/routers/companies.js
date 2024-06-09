const express = require('express');
const companyController = require('../controllers/companyController');
const router = express.Router();

router.post('/', companyController.creatCompany);
router.get('/:id', companyController.getCompanyById);
router.put('/:id', companyController.updateCompanyById);
router.delete('/:id', companyController.deleteCompanyById);
router.get('/', companyController.getAllCompanies);

module.exports = router;