const connectDB = require("./config/db");
const todos = require("./data/todos");
const Todo = require("./models/todoModel");
const colors = require("colors");
require("dotenv").config();

connectDB();

const importData = async () => {
  try {
    await Todo.deleteMany();
    await Todo.insertMany(todos);
    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Todo.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
