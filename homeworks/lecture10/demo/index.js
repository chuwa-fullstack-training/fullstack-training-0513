require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');
const Todo = require('./models/Todo');

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB:', err);
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/api/todos', todoRoutes);

app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});