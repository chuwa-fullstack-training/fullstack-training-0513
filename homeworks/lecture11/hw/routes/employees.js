const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.post('/', employeeController.createEmployee);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployeeById);
router.delete('/:id', employeeController.deleteEmployeeById);
router.get('/', employeeController.getAllEmployees);
router.get('/company/:companyId', employeeController.getEmployeesByCompanyId);

module.exports = router;
