const express = require('express');
const app = express();

const todoRoutes = require('./routers/todos');
const mainRoutes = require('./routers/mainRoute');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views',__dirname + '/views');

app.use('/api/todos', todoRoutes);

app.use('/', mainRoutes);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

/*
1. Create a new Todo
Method: Post
URL: 'http://localhost:3000/api/todos'
body:{
  "todo": "Chuwa Homework"
}
Expected: Created a new todo
2. Get all todos
Method: GET
URL: 'http://localhost:3000/api/todos'

3. Update a Todo
Method: PUT
URL: 'http://localhost:3000/api/{{InterviewTodo}}'

Body:{
    "done": "true"
} Expected: update the interview to do to be status true

4. Delete a Todo 
Method: 'DELETE'
URL: 'http://localhost:3000/api/todos/:id'




*/