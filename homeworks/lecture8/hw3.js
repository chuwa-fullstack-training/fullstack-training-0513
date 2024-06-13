/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const hw3Router = express.Router();

hw3Router.use(express.urlencoded({ extended: false }));

hw3Router.get('/', (req, res) => {
    const { name, age } = req.query;
    res.render('home', { submittedData: { name, age } });
});

hw3Router.post('/submit', (req, res) => {
    const { name, age } = req.body;
    res.redirect(`/?name=${name}&age=${age}`);
});

module.exports = hw3Router;
