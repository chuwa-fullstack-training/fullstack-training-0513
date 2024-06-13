const express = require('express');

const {
    createEmployee,
    getAllEmployees,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
    getAllEmployeesOfCompany
  } = require('../controllers/employee');
  
  const router = express.Router();
  
  router.post('/',createEmployee);

  router.get('/', getAllEmployees);
  
  router.get('/:id', getOneEmployee);
  
  router.put('/:id', updateEmployee);
  
  router.delete('/:id', deleteEmployee);

  router.get('/company/:companyId', getAllEmployeesOfCompany);
  
  module.exports = router;