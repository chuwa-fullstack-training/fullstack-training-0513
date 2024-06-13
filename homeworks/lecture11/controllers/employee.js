const { Employee, Company } = require('../schema');

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        console.log(err.message);
        res.status(500).join({ message: 'Server Error' });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllEmployeesByCompany = async (req, res) => {
    try {
        const employees = await Employee.find({ company: req.params.companyId }).populate('company');
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();

        const company = await Company.findById(employee.company);
        company.employees.push(employee);
        await company.save();
        res.status(201).json({ message: 'Employee created' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);

        employee.firstName = req.body.firstName ?? employee.firstName;
        employee.lastName = req.body.lastName ?? employee.lastName;
        employee.startDate = req.body.startDate ?? employee.startDate;
        employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;
        employee.resigned = req.body.resigned ?? employee.resigned;
        employee.salary = req.body.salary ?? employee.salary;

        await employee.save();
        res.josn(employee);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteEmployeeById = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params?.id);
        res.status(204).json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    getAllEmployeesByCompany,
    createEmployee,
    updateEmployeeById,
    deleteEmployeeById
}