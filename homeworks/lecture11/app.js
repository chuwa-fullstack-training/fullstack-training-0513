const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const port = 3000;
const app = express();
const secretKey = "fasjkhfjkdahgjhwehfkshk";

app.use(express.json());

const Company = require("./models/company");
const Employee = require("./models/employee");

mongoose.connect(
  "mongodb+srv://vivianqi718:Mongodbmima1!@cluster0.nbkfb3r.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("connect successfully"));

const authMiddleware = async (req, res, next) => {
  const token = req.headers?.authorization;
  try {
    if (!token) {
      req.user = null;
      console.log(req.user);
      console.log("token not exist");
    } else {
      const decoded = await jwt.verify(token, secretKey);
      req.user = await Employee.findById(decoded.id);
      console.log(decoded);
    }
    next();
  } catch (error) {
    res.status(401).json({ error: "token not valid" });
  }
};

app.post("/api/login", async (req, res) => {
  try {
    const { userName, passWord } = req.body;
    const user = await Employee.findOne({ userName });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    if (passWord !== user.passWord) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const payload = {
      id: user._id,
      userName: user.userName,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "30d" });
    console.log(`token is ${token}`);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/companies", async (req, res) => {
  try {
    const company = new Company(req.body);
    console.log(req.body);
    await company.save();
    console.log("company success");
    res.status(201).json({ company });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post("/employees", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    console.log("employee success");
    res.status(201).json({ employee });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    console.log("find company successfully: " + company);
    res.status(200).json({ company });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get("/employees/:id", authMiddleware, async (req, res) => {
  try {
    let employee;
    if (!req.user) {
      employee = await Employee.findById(req.params.id).select(
        "firstName lastName"
      );
    } else {
      employee = await Employee.findById(req.params.id);
    }
    console.log("find employee successfully: " + employee);
    res.status(200).json({ employee });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.put("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log("update company successfully");
    res.status(200).json({ company });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
app.put("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log("update employee successfully");
    res.status(200).json({ employee });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
app.delete("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    console.log("delete company successfully: " + company);
    res.json({ message: delete successfully });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.delete("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    console.log("delete employee successfully: " + employee);
    res.json({ message: "delete successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get("/companies", async (req, res) => {
  try {
    const companies = await Company.find();
    console.log(companies);
    res.json({ companies });
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.get("/employees", authMiddleware, async (req, res) => {
  try {
    let employees;
    if (!req.user) {
      employees = await Employee.find({}, "firstName lastName");
    } else {
      employees = await Employee.find();
    }
    console.log(employees);
    res.json({ employees });
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.get("/companies/:id/employees", authMiddleware, async (req, res) => {
  try {
    // console.log(req.user);
    if (!req.user) {
      console.log("1");
      res.status(401).json({ error: "unathorized" });
    } else if (!req.user.company.includes(req.params.id)) {
      console.log("2");
      res.status(401).json({ error: "unathorized" });
    } else {
      console.log("3");
      const employee = await Employee.find({ company: req.params.id });
      res.json({ employee });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.get("*", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => console.log("server is running on port " + port));
