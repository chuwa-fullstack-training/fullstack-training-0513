const db = require("./db");
const { createCompany, getCompanyById, createEmployee, getEmployeeById, updateCompanyById, updateEmployeeById,
     deleteCompanyById, deleteEmployeeById, getAllCompanies, getAllEmployees, getAllEmployeesByCompany, } = require("./queries");
const { Company, Employee } = require("./schemas")
const express = require("express");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secret_key = process.env.JWT_KEY;

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        req.userId = null;
        next();
    } else {
        jwt.verify(token, secret_key, (err, decoded) => {
            if (err) {
                req.userId = null
            } else {
                req.userId = decoded.id;
            }
            next();
        });
    }
}

app.post("/api/company", (req, res) => {
    console.log(req.body);
    if (!("name" in req.body) || !("id" in req.body)) {
        res.send("400 -- fields missed");
        return;
    }
    const { id, name, description, headquarters, industry } = req.body;
    createCompany(id, name, description, headquarters, industry).then(
        r => { res.send(r._id); }
    ).catch(err => { res.send( "500 -- " + err.toString()); });
});

app.post("/api/employee", (req, res) => {
    console.log(req.body);
    if (!("id" in req.body) || !("firstName" in req.body) 
            || !("lastName" in req.body) || !("companyId" in req.body)) {
        res.send("400 -- fields missed");
        return;
    }
    const { id, firstName, lastName, companyId, startDate, jobTitle, resigned, salary } = req.body;
    createEmployee(id, firstName, lastName, companyId, startDate ? new Date(startDate) : new Date(), jobTitle, resigned, salary)
    .then(r => {
        res.send(r._id);
    }).catch(err => {
        res.send( "500 -- " + err.toString());
    })
});

app.get("/api/company/:id", (req, res) => {
    getCompanyById(req.params.id).then( r => {
        res.send(r);
    }).catch(err => {
        res.send( "500 -- " + err.toString());
    });
});

// protected route
app.get("/api/employee/:id", verifyToken, (req, res) => {
    getEmployeeById(req.params.id).then( r => {
        if (req.userId === null) {
            res.send({
                firstName: r.firstName,
                lastName: r.lastName
            });
        } else {
            res.send(r);
        }
    }).catch(err => {
        res.send( "500 -- " + err.toString());
    });
});

app.get("/api/company", (req, res) => {
    getAllCompanies().then(r => {
        res.send(r);
    }).catch(err => {
        res.send( "500 -- " + err.toString());
    });
});

// protected route
app.get("/api/employee", verifyToken, (req, res) => {
    
    if (req.userId === null) {
        res.statusCode = 401
        res.send({auth: false, info: "unauthorized"});
    } else {
        getEmployeeById(req.userId).then(r => {
            return Company.findById(r.company);
        })
        .then(r => {
            return getAllEmployeesByCompany(r.id);
        })
        .then(r => {
            res.send(r);
        })
        .catch(err => {
            res.send( "500 -- " + err.toString());
        });
    }
});

app.patch("/api/company/:id", (req, res) => {
    updateCompanyById(req.params.id, req.body)
    .then(() => {
        res.send("company updated");
    }).catch(err => {
        res.send( "500 -- " + err.toString());
    });
});

app.patch("/api/employee/:id", (req, res) => {
    updateEmployeeById(req.params.id, req.body)
    .then(() => {
        res.send("employee updated");
    }).catch(err => {
        res.send( "500 -- " + err.toString());
    });
});

app.delete("/api/company/:id", (req, res) => {
    deleteCompanyById(req.params.id).then(() => {
        res.send("Company deleted");
    }).catch(err => {
        res.send( "500 -- " + err.toString());
    })
});

app.delete("/api/employee/:id", (req, res) => {
    deleteEmployeeById(req.params.id).then(() => {
        res.send("Employee deleted");
    }).catch(err => {
        res.send( "500 -- " + err.toString());
    })
});

app.post("/api/login", (req, res) => {
    getEmployeeById(req.body.id).then((emp) => {
        if (emp === null) {
            res.statusCode = 404;
            res.send({auth: false, info: "username not found"});
            return;
        } 
        if (emp.firstName === req.body.firstName) {
            const token = jwt.sign({id: req.body.id}, secret_key, { expiresIn: 86400 } );
            res.send({auth: true, info: "success", token: token});
            return
        } else {
            res.statusCode = 401;
            res.send({auth: false, info: "password incorrect"});
        }
    }).catch(err => {
        res.send( "500 -- " + err.toString());
    })
});

app.listen(3000, () => {
    console.log("server listen on localhost:3000");
})
