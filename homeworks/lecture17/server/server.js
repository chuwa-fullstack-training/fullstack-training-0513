const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');
const connectDB = require('./db/index');

const app = express();
const PORT = process.env.PORT || 7766;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
