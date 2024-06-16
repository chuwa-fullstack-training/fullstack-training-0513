const express = require('express');

const {
  createNewEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  getAllEmployees
} = require('../controllers/employee');

const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', createNewEmployee);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployeeById);
router.delete('/:id', deleteEmployeeById);
router.get('/', auth, getAllEmployees);


module.exports = router;