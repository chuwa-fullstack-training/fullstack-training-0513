/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.send("this is the home page");
});

app.get("/about", (req, res) => {
  res.send("this is the about page");
});

app.get("/home.html", (req, res) => {
  const { title, content } = req.query;
  res.render("home", { title, content });
});
app.post("/create-post", (req, res) => {
  const { title, content } = req.body;
  res.status(302).redirect(`/home.html?title=${title}&content=${content}`);
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
