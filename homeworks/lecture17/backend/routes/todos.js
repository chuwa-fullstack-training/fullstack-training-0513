const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);  // Send JSON response instead of rendering view
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new todo
router.post('/', async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });
    await newTodo.save();
    res.json(newTodo);
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted' });
  } 
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;