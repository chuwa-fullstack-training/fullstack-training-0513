const express = require('express');
const router = express.Router();
const {
  getAllCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  getEmployeesOfCompany
} = require('../controllers/company');

router.get('/', getAllCompanies);  // Get all companies
router.post('/create', createCompany);  // Create a new company
router.get('/:id', getCompany);  // Get a company by id
router.patch('/:id', updateCompany);  // Update a company by id
router.delete('/:id', deleteCompany);  // Delete a company by id
router.get('/:id/employees', getEmployeesOfCompany);  // Get all employees of a company

module.exports = router;
