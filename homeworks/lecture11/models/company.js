// models/Company.js
const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

module.exports = mongoose.model('Company', CompanySchema);

// models/Employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
