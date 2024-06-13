/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const url = require('url');
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/home.html', (req, res) => {
  const filePath = path.join(__dirname, 'home.html');
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Error: Can\'t read this file');
      return;
    }

    const query = req.query;
    if (Object.keys(query).length > 0) {
      const { title, content } = query;
      const dataSection = `<div><p>Title: ${title}</p><p>Content: ${content}</p></div>`;
      html = html.replace('</body>', `${dataSection}</body>`);
    }

    res.send(html);
  });
});

app.post('/create-post', (req, res) => {
  const { title, content } = req.body;
  const redirectUrl = url.format({
    pathname: '/home.html',
    query: { title, content }
  });

  res.redirect(302, redirectUrl);
});

app.get('/', (req, res) => {
  res.redirect('/home.html');
});

app.get('*', (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});