const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();

app.use(express.json());

const Company = require("./models/company");
const Employee = require("./models/employee");

mongoose.connect(
  "mongodb+srv://vivianqi718:Mongodbmima1!@cluster0.nbkfb3r.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("connect successfully"));

// - Create a new company
// - Create a new employee
// - Get a company by id
// - Get an employee by id
// - Update a company by id
// - Update an employee by id
// - Delete a company by id
// - Delete an employee by id
// - Get all companies
// - Get all employees
// - Get all employees of a company
app.post("/companies", async (req, res) => {
  try {
    const company = new Company(req.body);
    console.log(req.body);
    await company.save();
    console.log("company success");
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post("/employees", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    console.log("employee success");
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    console.log("find company successfully: " + company);
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    console.log("find employee successfully: " + employee);
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.put("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log("update company successfully");
    res.status(200).json(company);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
app.put("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log("update employee successfully");
    res.status(200).json(employee);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
app.delete("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    console.log("delete company successfully: " + company);
    res.json({ message: delete successfully });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.delete("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    console.log("delete employee successfully: " + employee);
    res.json({ message: "delete successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get("/companies", async (req, res) => {
  try {
    const companies = await Company.find();
    console.log(companies);
    res.json(companies);
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.get("/companies/:id/employees", async (req, res) => {
  try {
    const employee = await Employee.find({ company: req.params.id });
    res.json(employee);
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.listen(port, () => console.log("server is running on port " + port));
