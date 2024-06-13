const Employee = require('../models/Employee');
const Company = require('../models/Company');

const getAllEmployee = async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };

const getOneEmployee = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params?.id);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

const createEmployee = async (req, res) => {
    try {
      const { firstName, lastName, company, startDate, jobTitle, salary} = req.body;
      if (!firstName || !lastName || !company || !startDate || !jobTitle || !salary) {
        return res.status(400).json({ message: 'Please provide all required fields' });
      }

      const existingEmployee = await Employee.findOne({ firstName, lastName, company, startDate, jobTitle, salary});
      if (existingEmployee) {
        return res.status(400).json({ message: 'Employee already exists' });
      }
      // Check if company exists
      const existingCompany = await Company.findById(company);
        if (!existingCompany) {
            return res.status(400).json({ message: 'Company does not exist' });
        }
      const employee = new Employee({
        firstName,
        lastName,
        company: existingCompany._id,
        startDate: new Date(startDate),
        jobTitle,
        salary: Number(salary),
      
      });
      const createdEmployee = await employee.save();

      if (createdEmployee) {
        // Add employee to company
        existingCompany.employees.push(createdEmployee._id);
        await existingCompany.save();
        res.status(201).json({ message: 'Employee created' });
      } else {
        res.status(500).json({ message: 'Fail to create employee' });
      }
      
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  const updateEmployee = async (req, res) => {
    try{
        const employee = await Employee.findById(req.params?.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        const { firstName, lastName, company, startDate, jobTitle, resigned, salary } = req.body;

        // Check if company exists & changed
        if (company) {
            const existingCompany = await Company.findById(company);
            if (!existingCompany) {
                return res.status(400).json({ message: 'Company does not exist' });
            }
            //check if company has changed
            const oldCompany = await Company.findById(employee.company);
            if (oldCompany._id.toString() !== existingCompany._id.toString()) {
                // Remove employee from old company
                oldCompany.employees.pull(employee._id);
                await oldCompany.save();
                // Add employee to new company
                existingCompany.employees.push(employee._id);
                await existingCompany.save();
                // Update employee's company
                employee.company = existingCompany._id;
            }
        }
        employee.firstName = firstName ?? employee.firstName;
        employee.lastName = lastName ?? employee.lastName;
        employee.startDate = startDate ? new Date(startDate) : employee.startDate;
        employee.jobTitle = jobTitle ?? employee.jobTitle;
        employee.resigned = resigned ?? employee.resigned;
        employee.salary = salary ? Number(salary): employee.salary;
        await employee.save();
        res.status(200).json(employee);

    }catch(err){
      res.status(500).json({ message: 'Server Error' });
    }
  };

const deleteEmployee = async (req, res) => {
    try{
        const employee = await Employee.findById(req.params?.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        // Remove employee from company
        const company = await Company.findById(employee.company);
        company.employees.pull(employee._id);
        await company.save();
        await Employee.findByIdAndDelete(req.params?.id);
        res.status(204).json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getAllEmployee, getOneEmployee, createEmployee, updateEmployee, deleteEmployee };