const connectDB = require("./config/db");
const express = require("express");
const { errorHandler } = require("./middleware");
const todoRoutes = require("./routes/todoRoutes");
var cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const port = 8000;

app.use("/api/todos", todoRoutes);

app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));
