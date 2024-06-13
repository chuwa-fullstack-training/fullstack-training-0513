const { Todo } = require('../models/Todo');

const createTodo = async(req, res) => {
    try {
        const todo = new Todo(req.body);
        if(!todo.todo) {
            return res.status(404).json({message: 'Empty todo'});
        }
        await todo.save();
        res.status(200).json(todo);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

const updateTodo = async(req, res) => {
    try {
        Todo.findById(req.params.id).then(todo => {
            todo.done = !todo.done;
            todo.save().then(updatedTodo => res.json(updatedTodo));
          });
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    createTodo,
    updateTodo
};