const { asyncHandler } = require("../middleware");
const Todo = require("../models/todoModel");

const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
});

const createTodo = asyncHandler(async (req, res) => {
  const { todo } = req.body;
  console.log(todo);
  if (!todo) {
    res.status(400);
    throw new Error("Invalid todo data");
  }
  const todoExist = await Todo.findOne({ todo });
  if (todoExist) {
    res.status(400);
    throw new Error("Todo already exists");
  }
  const createdTodo = await Todo.create({
    todo,
    done: false,
  });
  res.status(201).json(createdTodo);
});

const updateTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  console.log(todo);
  if (todo) {
    todo.done = !todo.done;
    await todo.save();
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
