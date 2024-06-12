const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const {
  createCompany,
  updateCompany,
  getOneCompany,
  getAllCompanies,
  deleteCompany,
} = require("./controllers/company");
const {
  createEmployee,
  updateEmployee,
  getOneEmployee,
  getAllEmployees,
  getAllEmployeesByCompany,
  deleteEmployee,
} = require("./controllers/employee");
const Company = require("./models/Company");
const Employee = require("./models/Employee");

const c1 = "12345d1d84b5cfa61edfe2de";
const c2 = "12345d1d84b5cfa61edfe2e0";

const e1 = "12343ea86071b0c30fb6dd4f";
const e2 = "1234404a4262b90163285bb8";
const e3 = "123441032976a207845d8318";

async function test() {
  await connectDB();
  await getAllEmployeesByCompany(c1);

  mongoose.connection.close();
}

test();
