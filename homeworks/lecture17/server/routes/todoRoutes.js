const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get a single todo
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Create a new todo
router.post('/', async (req, res) => {
  try {
    const { todo, done } = req.body;
    const newTodo = new Todo({ todo, done });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const { todo, done } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { todo, done }, { new: true });
    if (!updatedTodo) return res.status(404).json({ error: 'Todo not found' });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) return res.status(404).json({ error: 'Todo not found' });
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
