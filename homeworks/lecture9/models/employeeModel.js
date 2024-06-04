const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Company",
  },
  startDate: {
    type: Date,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  resigned: {
    type: Boolean,
    required: true,
    default: false,
  },
  salary: {
    type: Number,
    required: true,
  },
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
