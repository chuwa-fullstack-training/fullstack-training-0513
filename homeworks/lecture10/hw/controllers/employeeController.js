const Employee = require('../models/employee');
const Company = require('../models/company');

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        await Company.findByIdAndUpdate(employee.company, { $push: { employees: employee._id } });
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get an employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('company manager');
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update an employee by ID
exports.updateEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an employee by ID
exports.deleteEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send();
        }
        await Company.findByIdAndUpdate(employee.company, { $pull: { employees: employee._id } });
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate('company manager');
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get all employees of a company
exports.getEmployeesByCompanyId = async (req, res) => {
    try {
        const employees = await Employee.find({ company: req.params.companyId }).populate('company manager');
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
};
