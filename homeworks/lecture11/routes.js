const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { Company, Employee } = require('./models');

const JWT_SECRET = '1b8e5e2f5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f'

const authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if(!token){
        return res.status(401).send({error:'Access denied'});
    }
    try{
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        res.status(400).send({error: 'Invalid token.'})
    }
}

router.post('/api/login', async (req,res) => {
    const { firstName, lastName } = req.body;
    try{
        const employee = await Employee.findOne({firstName, lastName});
        if(!employee) {
            return res.status(400).send({error: 'Invalid credentials'})
        }
        const token = jwt.sign({_id: employee._id, company: employee.company}, JWT_SECRET, { expiresIn: '1h' });
        res.send({token});
    } catch(error) {
        res.status(500).send({error: error.message});
    }
})






router.post('/companies', async (req, res) =>{
    const { name, description, headquarters, industry } = req.body;
    try{
        const newCompany = new Company({ name, description, headquarters, industry });
        await newCompany.save();
        res.status(201).send(newCompany);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/companies/:id', async (req,res) => {
    try{
        const company = await Company.findById(req.params.id);
        if(!company){
            return res.status(404).send('Company not found')
        }
        res.send(company);
    } catch(error) {
        res.status(500).send(error);
    }
})

router.put('/companies/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const company = await Company.findById(req.params.id);
        if(!company){
            return res.status(404).send('Company not found')
        }
        updates.forEach(update => company[update] = req.body[update]);
        await company.save();
        res.send(company);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/companies/:id', async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if(!company){
            return res.status(404).send('Company not found')
        }
        res.send(company);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/companies', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.send(companies);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/employees', async (req, res) => {
    const { firstName, lastName, company, startDate, jobTitle, resigned, salary, manager } = req.body;
    try {
        const newEmployee = new Employee({ firstName, lastName, company, startDate, jobTitle, resigned, salary, manager });
        await newEmployee.save();
        res.status(201).send(newEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/employees/:id',authenticate, async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/employees/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        updates.forEach(update => employee[update] = req.body[update]);
        await employee.save();
        res.send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/employees', async (req, res) => {
    const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;

    try{
        const employee = await Employee.find({});
        if(token){
            const decoded = jwt.verify(token, JWT_SECRET);
            const response = employee.map(emp => ({
                firstName: emp.firstName,
                lastName: emp.lastName,
                ...(decoded && decoded.company === emp.company ? emp.toObject() : {})
            }));
            res.send(response);
        } else {
            const response = employees.map(emp => ({
                firstName: emp.firstName,
                lastName: emp.lastName
            }));
            res.send(response);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/companies/:id/employees',authenticate, async (req, res) => {
    if (req.user.company !== req.params.id) {
        return res.status(403).send('Access denied');
    }

    try {
        const employees = await Employee.find({ company: req.params.id });
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});



module.exports = router;