const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  startDate: {
    type: Date
  },
  jobTitle: {
    type: String
  },
  resigned: {
    type: Boolean
  },
  salary: {
    type: Number
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;