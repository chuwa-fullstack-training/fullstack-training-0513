const express = require('express');
const connectDB = require('./config/db');
const companyRouter = require('./routes/companyRoutes');
const employeeRouter = require('./routes/employeeRoutes');

require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes


app.use('/api/companies', companyRouter);
app.use('/api/employees', employeeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));