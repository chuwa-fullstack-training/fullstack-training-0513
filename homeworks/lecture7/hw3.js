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

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const { method } = req;
    const parsedUrl = url.parse(req.url, true);

    if (method === 'GET') {
        if (req.url === '/') {
            res.end('this is the home page');
        } else if (req.url === '/about') {
            res.end('this is the about page');
        } else if (req.url.startsWith('/home.html')) {
            fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
                if (err) {
                    res.end('error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    let htmlContent = html.toString();

                    if (parsedUrl.query.title && parsedUrl.query.content) {
                        const title = parsedUrl.query.title || '';
                        const content = parsedUrl.query.content || '';
                        const dataHtml = `
                            <div>
                                <p>Title: ${title}</p>
                                <p>Content: ${content}</p>
                            </div>
                        `;
                        htmlContent = htmlContent.replace('</body>', `${dataHtml}</body>`);
                    }

                    res.end(htmlContent);
                }
            });
        } else {
            res.end('this is the 404 page');
        }
    } else if (method === 'POST') {
        if (req.url === '/create-post') {
            let body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const parsedData = querystring.parse(parsedBody);
                const queryString = querystring.stringify(parsedData);

                res.statusCode = 302;
                res.setHeader('Location', `/home.html?${queryString}`);
                res.end();
            });
        } else {
            res.end('this is the 404 page');
        }
    } else {
        res.end('Unsupported method');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
