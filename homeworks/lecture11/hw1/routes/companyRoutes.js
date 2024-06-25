const express = require("express");
const companyRoutes = express.Router();

const {
  getAllCompanies,
  getCompanyById,
  getEmployeesByCompanyId,
  createCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController.js");
const { auth } = require("../middleware/authMiddleware.js");

companyRoutes.route("/").get(getAllCompanies).post(createCompany);
companyRoutes
  .route("/:id")
  .get(getCompanyById)
  .put(updateCompany)
  .delete(deleteCompany);
companyRoutes.get("/:id/employees", auth, getEmployeesByCompanyId);
module.exports = companyRoutes;