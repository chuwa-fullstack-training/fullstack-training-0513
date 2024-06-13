/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './');

app.get("/", (req, res) => {
    res.send("this is the home page");
});

app.get("/about", (req, res) => {
    res.send('this is the aboutS page');
});

app.get("/home.html", (req, res) => {
    res.render("home", 
        {query: Object.keys(req.query).length === 0 ? "" : JSON.stringify(req.query)});
});

app.post("/create-post", (req, res) => {
    res.redirect(`/home.html?title=${req.body.title}&content=${req.body.content}`);
})

app.listen(3000, () => {
    console.log("app running on http://localhost:3000\n");
});