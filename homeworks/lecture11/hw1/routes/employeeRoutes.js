const express = require('express');

const employeeRouter = express.Router();

const { getAllEmployee, 
    getOneEmployee, 
    createEmployee, 
    updateEmployee, 
    deleteEmployee,
    getCompanyEmployees } = require('../controllers/employeeController');

employeeRouter.route('/').get(getAllEmployee).post(authenticate, createEmployee);
employeeRouter.route('/:id').get(authenticate, getOneEmployee).put(authenticate, updateEmployee).delete(authenticate, deleteEmployee);
employeeRouter.route('/company').get(authenticate, getCompanyEmployees);
module.exports = employeeRouter;
