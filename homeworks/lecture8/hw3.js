/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

//不加下面这两行,req.body是undefined,加了之后req.body的值可以被解析出来  例如{ name: 'anna', age: '12' }
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create-post", (req, res) => {
  //   console.log(req.body);
  const { name, age } = req.body;
  res.redirect(`/?name=${name}&age=${age}`);
});
app.listen(port, () => console.log("server is running on port: " + port));
