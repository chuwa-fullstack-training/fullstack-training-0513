const connectDB = require("./config/db");
const express = require("express");
const { errorHandler } = require("./middleware");
const todoRoutes = require("./routes/todoRoutes");
const app = express();
const path = require("path");
require("dotenv").config();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");
connectDB();

const port = process.env.PORT || 3000;

app.use("/api/todos", todoRoutes);

app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));
