const Todo = require('../models/todo');
const mongoose = require('mongoose');

const getAllTodos = async (req, res) => {
  try {
    const data = await Todo.find();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
}

const createTodo = async (req, res) => {
  const todo = new Todo({
    todo: req.body.todo
  });
  try {
    await todo.save();
    res.status(200).json(todo);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
}

const updateTodo = async (req, res) => {
  try {
    const {id} = req.params;
    const ID = new mongoose.Types.ObjectId(id);
    const todo = await Todo.findById(ID);
    if (todo) {
      const updateTodo = await Todo.findByIdAndUpdate(ID, {done: !todo.done}, {new: true});
      res.status(200).json(updateTodo);
    } else {
      res.status(400).send('Todo not found');
    }
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
}

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo
}
