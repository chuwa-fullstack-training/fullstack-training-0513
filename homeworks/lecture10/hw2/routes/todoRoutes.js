const express = require("express");
const todoRoutes = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodoById,
} = require("../controllers/todoController.js");
todoRoutes.route("/").get(getAllTodos).post(createTodo);
todoRoutes.route("/:id").put(updateTodoById);

// app.get("/", (req, res) => {
//   res.render("index", { todos });
// });

// app.post("/api/todos", (req, res) => {
//   const todo = req.body.todo;
//   todos.push({ id: todos.length + 1, todo, done: false });
//   res.json(todos);
// });

// app.put("/api/todos/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const todo = todos.find((t) => t.id === id);
//   todo.done = !todo.done;
//   res.json(todo);
// });
module.exports = todoRoutes;
