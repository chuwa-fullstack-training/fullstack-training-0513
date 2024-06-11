const express = require('express');
const connectDB = require('./db');
const Todo = require('./models/todo');

const app = express();

connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

app.post('/api/todos', async (req, res) => {
  const todo = new Todo({
    todo: req.body.todo
  });
  await todo.save();
  res.json(todos);
});

app.put('/api/todos/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.done = !todo.done;
  await todo.save();
  res.json(todo);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
