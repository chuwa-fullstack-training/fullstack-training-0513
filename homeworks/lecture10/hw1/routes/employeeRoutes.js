const express = require("express");
const employeeRoutes = express.Router();
const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController.js");
employeeRoutes.route("/").get(getAllEmployees).post(createEmployee);
employeeRoutes
  .route("/:id")
  .get(getEmployeeById)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = employeeRoutes;
