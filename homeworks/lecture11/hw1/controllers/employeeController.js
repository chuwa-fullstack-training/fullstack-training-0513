const { asyncHandler } = require("../middleware/asyncHandler");
const Company = require("../models/companyModel");
const Employee = require("../models/employeeModel");

const getAllEmployees = asyncHandler(async (req, res) => {
  let employees;
  if (req.user) {
    employees = await Employee.find({});
  } else {
    employees = await Employee.find({}, { firstName: 1, lastName: 1, _id: 0 });
  }
  res.status(200).json(employees);
});

const getEmployeeById = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404);
    throw new Error("Employee not found");
  }
});

const createEmployee = asyncHandler(async (req, res) => {
  const { firstName, lastName, startDate, jobTitle, salary, company_id } =
    req.body;
  const company = await Company.findById(company_id);
  if (!company) {
    res.status(404);
    throw new Error("Company not found");
  }

  const employee = new Employee({
    firstName,
    lastName,
    startDate: new Date(startDate),
    jobTitle,
    salary: Number(salary),
    company: company._id,
  });
  const createdEmployee = await employee.save();
  if (createdEmployee) {
    company.employees.push(createdEmployee._id);
    await company.save();
    res.status(201).json(createdEmployee);
  } else {
    res.status(404);
    throw new Error("Invalid employee data");
  }
});

const updateEmployee = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    startDate,
    jobTitle,
    salary,
    company_id,
    resigned,
  } = req.body;

  const employee = await Employee.findById(req.params.id);

  if (employee) {
    if (company_id) {
      const oldCompany = await Company.findById(employee.company);
      const newCompany = await Company.findById(company_id);

      if (oldCompany && newCompany) {
        oldCompany.employees.pull(employee._id);
        newCompany.employees.push(employee._id);
        await oldCompany.save();
        await newCompany.save();
        employee.company = req.body.company_id;
      } else {
        res.status(404);
        throw new Error("Company not found");
      }
    }

    employee.firstName = firstName || employee.firstName;
    employee.lastName = lastName || employee.lastName;
    employee.startDate = startDate ? new Date(startDate) : employee.startDate;
    employee.jobTitle = jobTitle || employee.jobTitle;
    employee.salary = salary !== undefined ? Number(salary) : employee.salary;
    employee.resigned =
      typeof resigned === "boolean" ? resigned : employee.resigned;

    const updatedEmployee = await employee.save();
    res.status(200).json(updatedEmployee);
  } else {
    res.status(404);
    throw new Error("Employee not found");
  }
});

const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  const company = await Company.findById(employee.company);
  if (!company) {
    return res.status(404).json({ message: "Company not found" });
  }

  await company.employees.pull(employee._id);
  await company.save();
  await Employee.findByIdAndDelete(employee._id);
  res.status(200).json({ message: "Employee deleted" });
});

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
