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

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', getAllTodos);
app.post('/api/todos', createTodo);
app.put('/api/todos/:id', updateTodo);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
