const Todo = require('../models/Todo');

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      res.status(500).json({ error: error.message });
    }
  },

  createTodo: async (req, res) => {
    try {
      console.log('Request body:', req.body);
      const todo = new Todo({
        todo: req.body.todo,
        done: false
      });
      await todo.save();
      res.status(201).json(todo);
    } catch (error) {
      console.error('Error creating todo:', error);
      res.status(500).json({ error: error.message });
    }
  },

  updateTodo: async (req, res) => {
    try {
      console.log('Updating todo with ID:', req.params.id);
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        console.error('Todo not found:', req.params.id);
        return res.status(404).json({ error: "Todo not found" });
      }
      todo.done = !todo.done;
      await todo.save();
      res.json(todo);
    } catch (error) {
      console.error('Error updating todo:', error);
      res.status(500).json({ error: error.message });
    }
  },

  deleteTodo: async (req, res) => {
    try {
      console.log('Deleting todo with ID:', req.params.id);
      const todo = await Todo.findByIdAndDelete(req.params.id);
      if (!todo) {
        console.error('Todo not found:', req.params.id);
        return res.status(404).json({ error: "Todo not found" });
      }
      res.json({ message: 'Todo deleted successfully', deletedTodo: todo });
    } catch (error) {
      console.error('Error deleting todo:', error);
      res.status(500).json({ error: error.message });
    }
  },

  renderTodosPage: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.render('index', { todos });
    } catch (error) {
      console.error('Error rendering todos page:', error);
      res.status(500).json({ error: error.message });
    }
  }
};
