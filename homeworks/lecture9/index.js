const express = require('express');
const app = express();
require('dotenv').config();
const companyRouter = require('./routes/company');
const employeeRouter = require('./routes/employee');
const connectDB = require('./db');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/companies', companyRouter);
app.use('/employees', employeeRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
