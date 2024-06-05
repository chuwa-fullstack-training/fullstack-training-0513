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
const parseUrl = require('url');

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === 'GET') {
    if (url === '/') {
      res.end('this is the home page');
    } else if (url === '/about') {
      res.end('this is the about page');
    } else if (url.startsWith('/home.html')) {
      const parsedUrl = parseUrl.parse(url, true);
      const { pathname, query } = parsedUrl;
      const filePath = path.join(__dirname, pathname);
      // find position to insert the submitted data
      fs.readFile(filePath, (err, html) => {
        if (err) {
          res.end('error');
        } else {
          const htmlString = html.toString();
          const position = htmlString.indexOf('</form>');
          const dataString = '<p>' + Object.keys(query).map(key => `${key}: ${query[key]}`).join(', ') + '</p>';
          const newHtmlString = htmlString.slice(0, position) + dataString + htmlString.slice(position);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(newHtmlString);
          res.end();
        }
      });
    } else {
      res.end('this is the 404 page');
    }
  } else if (method === 'POST') {
    if (url === '/create-post') {
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        res.statusCode = 302;
        res.setHeader('Location', `/home.html?${parsedBody}`);
        res.end(parsedBody);
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
