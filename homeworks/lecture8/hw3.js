/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/create-post', (req, res) => {
  const { title, content } = req.body;
  res.redirect(`/?title=${title}&content=${content}`);
});

app.get('/', (req, res) => {
  const { title, content } = req.query;
  const txt = (title || content) ? `title: ${title || ''}, content: ${content || ''}` : '';
  res.render('home', { content: txt });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
