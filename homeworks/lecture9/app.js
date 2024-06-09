const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 

const companyRoutes = require('./routers/companies');
const employeeRoutes = require('./routers/employees');

app.use('/api/companies', companyRoutes);
app.use('/api/employees', employeeRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/*
Testing1: Create a new company
http://localhost:3000/api/companies
Method: Post
with body:
{
  "name": "Chuwa America",
  "description": "A Wonderful Company",
  "headquarters": "Silicon Valley",
  "industry": "Technology"
}

Testing2: Create a new employee
Method: POST
http://localhost:3000/api/employees
with body:
{
  "firstName": "Yuxuan",
  "lastName": "Li",
  "company": "{{Chuwa}}", 
  "startDate": "2024-06-08",
  "jobTitle": "Software Engineer",
  "resigned": false,
  "salary": 80000
}
{{chuwa}} is set with the environemtn variable: 6665462936bdd3e6539a5102(id of the company)

Test3: Get a company by Id:
Method: Get
http://localhost:3000/api/companies/{{Chuwa}}

Test4: Get a Employee By Id:
Method: Get
http://localhost:3000/api/employees/{{Yuxuan}} //Similarly, Yuxuan is setted as the environemnt variable

Test5: Update a company by Id:
Method: Put
http://localhost:3000/api/companies/{{Chuwa}} with body:
{
  "description": "A leading tech company"
}
Check: http://localhost:3000/api/companies/{{Chuwa}}

Test6: Update an employee by Id:
Method: Put
http://localhost:3000/api/employees/{{Yuxuan}}

{
  "firstName": "Jack"
  "lastName": "Ma"
}
Verify:
http://localhost:3000/api/employees/{{Yuxuan}} -> Will return Jack Ma

Test7: Get all companies
Method: 'GET'
URL: 'http://localhost:3000/api/companies'


Test8: Test delete a company by Id:
Method: 'Delete'
First create a new company: 
http://localhost:3000/api/companies
with body:
{
  "name": "Amazon",
  "description": "A cloud and retail company",
  "headquarters": "Seattle",
  "industry": "Technology"
}
and verify via: 

Method: 'GET'
URL: 'http://localhost:3000/api/companies'
and then try to delete the comapny with:
Method: 'Delete'
URL: 'http://localhost:3000/api/companies/{{Amazon}}'

and verify once again with:
Method: 'GET'
URL: 'http://localhost:3000/api/companies'

Test9: Get All Employees
Method: 'GET'
URL: 'http://localhost:3000/api/employees'

Test10: Get All Employees of a Company:
Method: 'GET'
URL: 'http://localhost:3000/api/employees/company/{{chuwa}}

Test11: Delete an Employee by ID:
Method: 'Delete'
URL: 'http://localhost:3000/api/employees/{{Yuxuan}}'
Verify Again By:
Method: 'GET'
URL: 'http://localhost:3000/api/employees/company/{{chuwa}}

Test12: Get employees by manager ID:
Create a new employee as a manager (it has no manager ID):
POST http://localhost:3000/api/employees
{
  "firstName": "Jack",
  "lastName": "Ma",
  "company": "{{Chuwa}}", 
  "startDate": "2024-06-08",
  "jobTitle": "Senior oftware Engineer",
  "resigned": false,
  "salary": 100000
}

Update Yuxuan's manager to JackMa:
http://localhost:3000/api/employees/{{Yuxuan}}
body:
{
    "manager": "{{Jack}}"
}
Create another new employee with manager to be Jack ma
POST http://localhost:3000/api/employees
{
  "firstName": "Alice",
  "lastName": "Ai",
  "company": "{{Chuwa}}",
  "startDate": "2024-06-08",
  "jobTitle": "Engineer",
  "resigned": false,
  "salary": 80000,
  "manager": "{{Jack}}"
}
Veirfy via:
Method: 'GET'
URL: 'http://localhost:3000/api/employees'

Get Employees by manager Id:  (//Expected: Jack Ma)
GET http://localhost:3000/api/employees/manager/ManagerObjectId

*/