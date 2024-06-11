/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.get('/home.html', (req, res) => {
    const query = Object.keys(req.query).length !== 0? req.query : undefined;
    res.render('home', { query });
});

app.post('/create-post', (req, res) => {
    const body = req.body;
    const queryString = Object.keys(body).map(key => `${key}=${body[key]}`).join('&');
    res.redirect(`/home.html?${queryString}`);
})


app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});


//test: http://localhost:3000/home.html