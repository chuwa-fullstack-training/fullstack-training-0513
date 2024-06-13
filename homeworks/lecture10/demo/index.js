const express = require('express');
const path = require('path');
const Todo = require('./modules/Todo');
const connectDB = require('./db');

connectDB();

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const todos = [
  { id: 1, todo: 'first thing', done: true },
  { id: 2, todo: 'second thing', done: false },
  { id: 3, todo: 'third thing', done: false }
];

// get all todos
app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// create a todo
app.post('/api/todos', async (req, res) => {
  try {
    const todo = new Todo({
      todo: req.body.todo
    });
    await todo.save();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// update a todo
app.put('/api/todos/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const todo = await Todo.findById(id);
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
