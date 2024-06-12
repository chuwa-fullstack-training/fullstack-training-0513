const {Company, Employee} = require('../schema');
const auth = require('../middlewares/auth');
const mongoose = require('mongoose');

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

  getEmployeeById: [auth,async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      if (req.user) {
        res.json(employee);
      } else {
        res.json({
          firstName: employee.firstName,
          lastName: employee.lastName
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }],

  updateEmployeeById: [auth, async (req, res) => {
    try {
      const updateData = req.body;
      
      if (updateData.company) {
        updateData.company = new mongoose.Types.ObjectId(updateData.company);
      }
      const employee = await Employee.findByIdAndUpdate(req.params.id, updateData, { new: true});
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }],

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

  getAllEmplyees: [auth, async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized: You need to be logged in to access this resource' });
      }
      const employees = await Employee.find({ company: req.user.company }).populate('company').populate('manager');
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }],

  getAllEmployeesByCompany: [auth, async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized: You need to be logged in to access this resource' });
      }
      if (req.user.company !== req.params.companyId) {
        return res.status(403).json({ message: 'Access forbidden' });
      }
      const employees = await Employee.find({ company: req.params.companyId }).populate('company');
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }],

  getEmployeeByManager: [auth, async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized access'});
      }
      const managerId = req.params.managerId;
      const employees = await Employee.find({ manager: managerId});
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }]
};