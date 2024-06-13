const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const connectDB = require('./db/index');
const todoRouter = require('./routes/todos');
const { Todo } = require('./models/Todo');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/api', todoRouter);

app.get('/', async(req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos });
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});