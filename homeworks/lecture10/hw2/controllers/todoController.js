const { asyncHandler } = require("../middleware");
const Todo = require("../models/todoModel");

const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({});
  res.render("index", { todos });
});

const createTodo = asyncHandler(async (req, res) => {
  const { todo } = req.body;
  const todoExist = await Todo.findOne({ todo });
  if (todoExist) {
    res.status(400);
    throw new Error("Todo already exists");
  }
  const createdTodo = await Todo.create({
    todo,
  });

  if (todo) {
    res.status(201).json(createdTodo);
  } else {
    res.status(400);
    throw new Error("Invalid todo data");
  }
});

const updateTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    todo.done = !todo.done;
    todo.save();
    res.status(200).json(todo);
  } else {
    res.status(404);
    throw new Error("Todo not found");
  }
});

module.exports = {
  getAllTodos,
  createTodo,
  updateTodoById,
};
