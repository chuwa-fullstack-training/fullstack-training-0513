/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 *
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */

const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./hw3Views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/home.html", (req, res) => {
  if (!req.query) {
    res.render("homeHtml");
  } else {
    if (Object.keys(req.query).length === 0) {
      res.render("homeHtml");
    } else {
      res.render("homeHtml", { query: req.query });
    }
  }
});

router.post("/create-post", (req, res) => {
  const body = req.body;
  const parsedBody = Object.keys(body)
    .map((key) => `${key}=${body[key]}`)
    .join("&");
  console.log(parsedBody);
  res.redirect(`/home.html?${parsedBody}`);
});

app.use("/", router);

app.use("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
