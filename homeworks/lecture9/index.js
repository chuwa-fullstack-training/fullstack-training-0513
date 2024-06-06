const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const companyRouter = require('./routes/company');
const employeeRouter = require('./routes/employee');

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/companies', companyRouter);
app.use('/employees', employeeRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
