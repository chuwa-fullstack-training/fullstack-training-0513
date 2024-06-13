const express = require('express');

const auth = require('../middlewares/auth')

const {
  createCompany,
  getAllCompanies,
  getOneCompany,
  updateCompany,
  deleteCompany,
} = require('../controllers/company');

const router = express.Router();

router.post('/', createCompany);

router.get('/', auth, getAllCompanies);

router.get('/:id', getOneCompany);

router.put('/:id', updateCompany);

router.delete('/:id', deleteCompany);

module.exports = router;

