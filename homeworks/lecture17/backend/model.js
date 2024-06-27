const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("todo", todoSchema);
