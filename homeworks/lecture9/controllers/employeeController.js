const {Company, Employee} = require('../schema');

module.exports = {
  createEmployee: async (req, res) => {
    try {
      const employee = new Employee(req.body);
      await employee.save();

      const company = await Company.findById(employee.company);
      company.employees.push(employee);
      await company.save();

      res.status(201).json(employee);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEmployeeById: async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateEmployeeById: async (req, res) => {
    try {
      const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true});
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteEmployeeById: async (req, res) => {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.id);
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found'});
      }
      const company = await Company.findById(employee.company);
      company.employees.pull(employee._id);
      await company.save();

      res.json({ message: 'Employee deleted successfully', deletedEmployeeId: req.params.id});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllEmplyees: async (req, res) => {
    try {
      const employees = await Employee.find().populate('company').populate('manager');
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllEmployeesByCompany: async (req, res) => {
    try {
      const employees = await Employee.find({ company: req.params.companyId }).populate('company');
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEmployeeByManager: async (req, res) => {
    try {
      const managerId = req.params.managerId;
      const employees = await Employee.find({ manager: managerId});
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};