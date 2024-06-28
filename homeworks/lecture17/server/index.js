const express = require('express');
const path = require('path');
// const Todo = require('./model/Todo');
const connectDB = require('./model');
const cors = require('cors');

connectDB();

const app = express();
const port = 8080;
const todosRouter = require('./routes/todos');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect static file: front-end
app.use(express.static(path.join(__dirname, 'client/build')));

// REST API Routes

app.use('/api', todosRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})