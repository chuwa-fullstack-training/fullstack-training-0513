const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    headquarters: { type: String, required: true },
    industry: { type: String, required: true },
    _employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
});

const employeeSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    startDate: { type: Date, required: true },
    jobTitle: { type: String, required: true },
    resigned: { type: Boolean, required: true },
    salary: { type: Number, required: true },
    manager: { type: Schema.Types.ObjectId, ref: 'Employee' }
});

const Company = mongoose.model('Company', companySchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = { Company, Employee };