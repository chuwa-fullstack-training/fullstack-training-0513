const Employee = require('../models/Employee');
const Company = require('../models/Company');

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate('company').populate('manager');
        res.status(200).json(employees);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getOneEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id).populate('company').populate('manager');
        res.send(employees);
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        await Company.findByIdAndUpdate(employee.company, { $push: { employees: employee._id } });
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }

};

const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params?.id);
        await Company.findByIdAndUpdate(employee.company, { $pull: { employees: employee._id } });
        res.status(204).json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllEmployeesOfCompany = async (req, res) => {
    try {
        const employees = await Employee.find({ company: req.params.companyId }).populate('company').populate('manager');
        res.send(employees);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
    getAllEmployeesOfCompany
};
