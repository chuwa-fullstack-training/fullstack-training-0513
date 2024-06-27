const express = require("express");
const todoRoutes = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodoById,
} = require("../controllers/todoController.js");
todoRoutes.route("/").get(getAllTodos).post(createTodo);
todoRoutes.route("/:id").put(updateTodoById);

module.exports = todoRoutes;
