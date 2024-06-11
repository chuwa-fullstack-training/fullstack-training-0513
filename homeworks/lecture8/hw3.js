/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('this is the home page');
});

app.get('/about', (req, res) => {
    res.send('this is the about page');
});

app.get('/home.html', (req, res) => {
    fs.readFile(path.join(__dirname, 'home.html'), 'utf-8', (err, html) => {
        if (err) {
            res.status(500).send('Error Reading File');
            return;
        }

        const { title, content } = req.query;
        let htmlContent = html.toString();

        if (title && content) {
            const dataHtml = `
                <div>
                    <p>Title: ${title}</p>
                    <p>Content: ${content}</p>
                </div>
            `;
            htmlContent = htmlContent.replace('</body>', `${dataHtml}</body>`);
        }

        res.send(htmlContent);
    });
});

app.post('/create-post', (req, res) => {
    const { title, content } = req.body;
    const queryString = `title=${title}&content=${content}`;
    res.redirect(`/home.html?${queryString}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
