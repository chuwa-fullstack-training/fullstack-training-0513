const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  startDate: { type: Date, default: Date.now },
  jobTitle: String,
  resigned: { type: Boolean, default: false },
  salary: Number,
  password: { type: String, required: true }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;