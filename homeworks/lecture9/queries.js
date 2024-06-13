const db = require("./db");
const { Company, Employee } = require("./schemas");


async function createCompany(id, name, description, headquarters, industry) {
    const company = new Company({
        id: id,
        name: name,
        description: description,
        headquarters: headquarters,
        industry: industry,
    });
    try {
        let res = await company.save();
        console.log("Company Saved");
        return res;
    } catch (err) {
        console.log(err);
    }
}

async function getCompanyById(id) {
    try{
        let companies = await Company.find({id: id});
        return companies[0];
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function updateCompanyById(id, update_prompt) {
    try {
        await Company.findOneAndUpdate({id: id}, update_prompt);
        console.log("Company updated");
    } catch (err) {
        console.log(err);
    }
}

async function createEmployee(id, firstName, lastName, companyId, 
            startDate, jobTitle, resigned, salary, ) {
    const comp = await getCompanyById(companyId);

    const employee = new Employee({
        id: id,
        firstName: firstName,
        lastName: lastName, 
        company: comp._id,
        startDate: startDate,
        jobTitle: jobTitle,
        resigned: resigned,
        salary: salary
    });

    try {
        let res = await employee.save();
        console.log(res);
        console.log("Employee Saved");
        comp._employees.push(res._id);
        await comp.save();
        console.log("Company ref updated");
        return res;
    } catch (err) {
        console.log(err);
    }
}

async function getEmployeeById(id) {
    try{
        let employees = await Employee.find({id: id});
        return employees[0];
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function updateEmployeeById(id, update_prompt) {
    try {
        await Employee.findOneAndUpdate({id: id}, update_prompt);
        console.log("Employee updated");
    } catch (err) {
        console.log(err);
    }
}

async function deleteCompanyById(id) {
    try{
        await Company.findOneAndDelete({id: id});
        console.log("A company deleted");
    } catch (err) {
        console.log(err);
    }
}

async function deleteEmployeeById(id) {
    try{
        await Employee.findOneAndDelete({id: id});
        console.log("An employee deleted");
    } catch (err) {
        console.log(err);
    }
}

async function getAllCompanies() {
    try {
        let companies = await Company.find({});
        console.log("get all companies success");
        return companies;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function getAllEmployees() {
    try {
        let employees = await Employee.find({});
        console.log("get all employees success");
        return employees;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function getAllEmployeesByCompany(companyId) {
    try {
        let comp = await Company.findOne({id: companyId});
        let employees = await Employee.find({company: comp._id});
        console.log("get all employees success");
        return employees;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = {
    createCompany,
    getCompanyById,
    createEmployee,
    getEmployeeById,
    updateCompanyById,
    updateEmployeeById,
    deleteCompanyById,
    deleteEmployeeById,
    getAllCompanies,
    getAllEmployees,
    getAllEmployeesByCompany
}


