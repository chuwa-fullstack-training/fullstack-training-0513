const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Create a new todo
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        const newTodo = new Todo({
            title,
            description
        });
        await newTodo.save();
        res.redirect('/');
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get a single todo by id
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.render('todo', { todo });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a todo by id
router.put('/:id', async (req, res) => {
    const { title, description, completed } = req.body;
    try {
        await Todo.findByIdAndUpdate(req.params.id, {
            title,
            description,
            completed: completed === 'on'
        });
        res.redirect('/');
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a todo by id
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
