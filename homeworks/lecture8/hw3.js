/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//Set Pug as the model view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('this is the home page');
});

app.get('/about', (req, res) => {
  res.send('this is the about page');
});

app.get('/home.html', (req, res) => {
  const query = req.query;
  res.render('home', { query });
});

app.post('/create-post', (req, res) => {
  const body = req.body;
  const queryString = new URLSearchParams(body).toString();
  res.redirect(`/home.html?${queryString}`);
});

app.use((req, res) => {
  res.status(404).send('this is the 404 page');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
