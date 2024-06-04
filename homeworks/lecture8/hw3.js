/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('this is the home page');
});

app.get('/about', (req, res) => {
    res.send('this is the about page');
});

app.get('/home.html', (req, res) => {
    const queryObject = req.query;

    fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
        if (err) {
            res.status(500).send('Error reading the HTML file');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let responseHtml = html.toString();
        if (queryObject.title || queryObject.content) {
            responseHtml += `<p>Title: ${queryObject.title}</p><p>Content: ${queryObject.content}</p>`;
        }
        res.end(responseHtml);
    });
});

app.post('/create-post', (req, res) => {
    const { title, content } = req.body;
    res.redirect(`/home.html?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
