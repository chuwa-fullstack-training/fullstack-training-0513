const express = require('express');

const {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateConpanyById,
    deleteCompanyById
} = require('../controllers/company');

const router = express.Router();

router.get('/', getAllCompanies);
router.get('/:id', getCompanyById);
router.post('/', createCompany);
router.put('/:id', updateConpanyById);
router.delete('/:id', deleteCompanyById);

module.exports = router;