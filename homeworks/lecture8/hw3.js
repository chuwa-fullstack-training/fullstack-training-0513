/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    const { title, content } = req.query;
    res.render('home', { title, content });
});

app.get('/home', (req, res) => {
  const query = req.query || {}; 
  res.render('home', {query});

});
app.post('/create-post', (req, res) => {
  const { title, content } = req.body;
  res.redirect(`/home?title=${title}&content=${content}`);
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
