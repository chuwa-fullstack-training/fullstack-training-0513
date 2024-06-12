const express = require('express');
const employeeController = require('../controllers/employeeController');
const router = express.Router();

router.post('/', employeeController.createEmployee);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployeeById);
router.delete('/:id', employeeController.deleteEmployeeById);
router.get('/', employeeController.getAllEmplyees);
router.get('/company/:companyId', employeeController.getAllEmployeesByCompany);
router.get('/manager/:managerId', employeeController.getEmployeeByManager);

module.exports = router;