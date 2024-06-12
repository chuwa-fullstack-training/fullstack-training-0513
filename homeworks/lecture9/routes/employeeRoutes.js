const express = require('express');

const employeeRouter = express.Router();

const { getAllEmployee, 
    getOneEmployee, 
    createEmployee, 
    updateEmployee, 
    deleteEmployee } = require('../controllers/employeeController');

employeeRouter.route('/').get(getAllEmployee).post(createEmployee);
employeeRouter.route('/:id').get(getOneEmployee).put(updateEmployee).delete(deleteEmployee);
module.exports = employeeRouter;
