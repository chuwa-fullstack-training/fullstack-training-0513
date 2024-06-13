const express = require('express');

const {
    getAllEmployees,
    getEmployeeById,
    getAllEmployeesByCompany,
    createEmployee,
    updateEmployeeById,
    deleteEmployeeById
} = require('../controllers/employee');

const router = express.Router();

router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.get('/company/:companyId', getAllEmployeesByCompany);
router.post('/', createEmployee);
router.put('/:id', updateEmployeeById);
router.delete('/:id', deleteEmployeeById);

module.exports = router;