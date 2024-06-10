const express = require('express');
const router = express.Router();
const {
  getAllEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employee');
const auth = require('../middlewares/auth');

router.get('/', auth, getAllEmployees);  // Get all employees
router.post('/create', createEmployee);  // Create a new employee
router.get('/:id', auth, getEmployee);  // Get an employee by id
router.patch('/:id', updateEmployee);  // Update an employee by id
router.delete('/:id', deleteEmployee);  // Delete an employee by id

module.exports = router;
