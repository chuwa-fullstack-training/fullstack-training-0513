const mongoose = require('./connect');
const { Schema } = mongoose;

const CompanySchema = new Schema({
  name: { type: String, required: true },
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
});

const EmployeeSchema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  startDate: { type: Date, required: true },
  jobTitle: { type: String, required: true},
  resigned: { type: Boolean, default: false},
  salary: { type: Number, required: true},
  manager: { type: Schema.Types.ObjectId, ref: 'Employee'}
});

const Company = mongoose.model('Company', CompanySchema);
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = {
    Company,
    Employee
};