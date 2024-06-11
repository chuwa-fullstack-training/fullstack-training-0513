const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: { type: String, unique: true },
  passWord: String,
  company: [{ type: Schema.Types.ObjectId, ref: "Company" }],
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
});
module.exports = mongoose.model("Employee", employeeSchema);
