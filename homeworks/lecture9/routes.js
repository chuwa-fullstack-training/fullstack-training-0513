const express = require('express');
const router = express.Router();

const { Company, Employee } = require('./models');

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

router.get('/employees/:id', async (req, res) => {
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
    try {
        const employees = await Employee.find({});
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/companies/:id/employees', async (req, res) => {
    try {
        const employees = await Employee.find({ company: req.params.id });
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;