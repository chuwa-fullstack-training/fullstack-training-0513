const Todo = require('../models/Todo');

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createTodo: async (req, res) => {
    try {
      const todo = new Todo({
        todo: req.body.todo,
        done: false
      });
      await todo.save();
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateTodo: async(req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        return res.status(404).json({error: "Todo not found" });
      }
      todo.done = !todo.done;
      await todo.save();
      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  },

  deleteTodo: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndDelete(req.params.id);
      if (!todo) {
        return res.status(400).json({ error: "Todo not found" });
      }
      res.json({ message: 'Todo deleted Successfully', deletedTodo: todo});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  renderTodosPage: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.render('index', { todos });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};