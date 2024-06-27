const express = require('express');
const connectDB = require('./config/db');
const toDoRouter = require('./routes/toDoRoutes');
require('dotenv').config();
const cors = require('cors');

connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use('/api/toDo', toDoRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
