const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;