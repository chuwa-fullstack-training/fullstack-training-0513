const connectDB = require("./config/db");
const companies = require("./data/companies");
const employees = require("./data/employees");
const Company = require("./models/companyModel");
const Employee = require("./models/employeeModel");
const colors = require("colors");

require("dotenv").config();
connectDB();

const importData = async () => {
  try {
    await Company.deleteMany();
    await Employee.deleteMany();

    const createdCompanies = await Company.insertMany(companies);
    const firstCompany = createdCompanies[0];

    const sampleEmployees = employees.map((employee) => {
      return { ...employee, company: firstCompany._id };
    });

    const createdEmployees = await Employee.insertMany(sampleEmployees);
    createdEmployees.map((employee) =>
      firstCompany.employees.push(employee._id)
    );
    await firstCompany.save();

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Company.deleteMany();
    await Employee.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
