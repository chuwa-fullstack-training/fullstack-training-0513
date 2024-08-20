const mongoose = require('../connect');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  todo: { type: String, required: true },
  done: { type: Boolean, default: false }
});

module.exports = mongoose.model('Todo', TodoSchema);
