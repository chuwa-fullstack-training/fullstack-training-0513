const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Todo = require("./model");
const port = 3000;
let todos;

// app.set("view engine", "pug");
// app.set("views", "./views");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://vivianqi718:Mongodbmima1!@cluster0.nbkfb3r.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.once("open", () => console.log("mongodb is connecting"));

app.get("/todos", async (req, res) => {
  try {
    todos = await Todo.find();
    console.log(todos);
    res.json(todos);
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.post("/todos", async (req, res) => {
  try {
    const todo = new Todo({
      id: req.body.todo,
      name: req.body.todo,
      done: false,
    });
    await todo.save();
    // todos = await Todo.find();
    // console.log(todos);
    // res.json(todos);
    res.json(todo);
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.put("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let todo = await Todo.find({ id: id });
    console.log(todo);
    todo = todo[0];
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let todo = await Todo.findOneAndDelete({ id: id });
    console.log(todo);
    res.json({ todo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => console.log("server is running on port :" + port));
