const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoListSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    created_time: {
        type: Date
    },
    deadline: {
        type: Date
    }
})