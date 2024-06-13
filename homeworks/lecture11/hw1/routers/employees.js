const express = require('express');
const auth = require('../middlewares/auth');
const accessControl = require('../middlewares/accessControl');

const {
  createEmployee,
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployeesOfCompany
} = require('../controllers/employee');

const router = express.Router();

router.post('/', createEmployee);

router.get('/', auth, accessControl, getAllEmployees);

router.get('/:id', getOneEmployee);

router.put('/:id', updateEmployee);

router.delete('/:id', deleteEmployee);

router.get('/company/:companyId', auth, getAllEmployeesOfCompany);

module.exports = router;