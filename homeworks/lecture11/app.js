const express = require('express');
const app = express();
const port = 3000;


app.use(express.json()); 

const companyRoutes = require('./routers/companies');
const employeeRoutes = require('./routers/employees');
const authRoutes = require('./routers/auth');

app.use('/api/companies', companyRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/*
Test:
1. Login to get a token
Method: POST
URL: /api/auth/login
Body: {
  "firstName": "Yuxuan",
  "lastName": "Li"
}

2. Test Get all employees of the (same) comapny for loged in user
(protected route):
http://localhost:3000/api/employees
Method: GET
Header: x-auth-token: (with geneerated token)

3. Test Get an employee By Id:
URL: http://localhost:3000/employees/{{Jackie Chen}}
Method: GET
Header setted or none stted






*/