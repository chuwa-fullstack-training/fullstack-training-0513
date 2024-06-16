const express = require('express');
const {
  createNewCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getAllCompanies,
  getAllEmployeesOfOneCompany
} = require('../controllers/company');

const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', createNewCompany);
router.get('/:id', getCompanyById);
router.put('/:id', updateCompanyById);
router.delete('/:id', deleteCompanyById);
router.get('/', getAllCompanies);
router.get('/:id/employees', auth, getAllEmployeesOfOneCompany);

module.exports = router;