const express = require('express');
const connectDB = require('./config/db');
const toDoRouter = require('./routes/toDoRoutes');
require('dotenv').config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.urlencoded({ extended: true }));

// Routes

app.use('/api/toDo', toDoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
