const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    headquarters: {
        type: String
    },
    industry: {
        type: String
    },
    _employees: [
        {
            type: Schema.Types.ObjectId,
            ref: "Employee"
        }
    ]
});

const EmployeeSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company"
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
});

const Company = mongoose.model('Company', CompanySchema);
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = {
    Company, Employee
}