const connectDB = require("./config/db");
const express = require("express");
// const companies = require("./data/companies");
const cookieParser = require("cookie-parser");
const companyRoutes = require("./routes/companyRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/companies", companyRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));
