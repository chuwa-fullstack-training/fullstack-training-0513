const connectDB = require("./config/db");
const express = require("express");
// const companies = require("./data/companies");

const companyRoutes = require("./routes/companyRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const { errorHandler } = require("./middleware");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/companies", companyRoutes);
app.use("/api/employees", employeeRoutes);

app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));
