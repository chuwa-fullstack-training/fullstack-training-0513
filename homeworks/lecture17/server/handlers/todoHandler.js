const Todo = require('../model/Todo');

// get all todos
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
        // res.render('index', { todos });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

// create a todo
const createTodo = async (req, res) => {
    try {
        const newTodo = new Todo({
            todo: req.body.todo,
        });

        await newTodo.save();

        res.status(200).json(newTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// update a todo
const updateTodo = async (req, res) => {
    try {
        // const id = parseInt(req.params.id, 10);
        const id = req.params.id;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: 'Do not have this task.' });
        }
        todo.done = !todo.done;
        await todo.save();
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// delete a todo
const deleteTodo = async (req, res) => {
    // wait to implement
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
}