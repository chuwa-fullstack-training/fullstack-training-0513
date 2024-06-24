const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db');
const {
  getAllTodos,
  createTodo,
  updateTodo,
} = require('./controllers/todo');

connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/todos', getAllTodos);
app.post('/todos', createTodo);
app.put('/todos/:id', updateTodo);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
