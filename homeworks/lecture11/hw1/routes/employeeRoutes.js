const express = require("express");
const employeeRoutes = express.Router();
const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController.js");
const { auth } = require("../middleware/authMiddleware.js");
employeeRoutes.route("/").get(auth, getAllEmployees).post(createEmployee);
employeeRoutes
  .route("/:id")
  .get(auth, getEmployeeById)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = employeeRoutes;
