// app.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const companyRoutes = require('./routes/companies');
const employeeRoutes = require('./routes/employees');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/yourdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/employees', employeeRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
