const express = require('express');
const companyRouter = require('./routers/company');
const employeeRouter = require('./routers/employee');
const authRouter = require('./routers/auth');
const connectDB = require('./db');

const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/company', companyRouter);
app.use('/api/employee', employeeRouter);
app.use('api/auth', authRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
