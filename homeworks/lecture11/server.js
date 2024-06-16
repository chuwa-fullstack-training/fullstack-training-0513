const express = require('express');
const app = express();
const companyRouter = require('./routers/company');
const employeeRouter = require('./routers/employee');
const authRouter = require('./routers/auth');
const connectDB = require('./database');
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api/companies', companyRouter);
app.use('/api/employees', employeeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});