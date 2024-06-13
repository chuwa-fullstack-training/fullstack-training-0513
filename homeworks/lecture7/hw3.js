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
 const url = require('url');
 const qs = require('querystring');
 
 const server = http.createServer((req, res) => {
     if (req.method === 'GET') {
         if (req.url.startsWith('/home.html') || req.url === '/') {
             const params = new URLSearchParams(url.parse(req.url).search);
             const name = params.get('name');
             const age = params.get('age');
             const responseData = `
 <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <title>Home Page</title>
 </head>
 <body>
 <form method="POST">
     <label for="name">Name:</label>
     <input type="text" id="name" name="name" value="${name || ''}">
     <br>
     <label for="age">Age:</label>
     <input type="text" id="age" name="age" value="${age || ''}">
     <br>
     <button type="submit">Submit</button>
 </form>
 <p id="result">${name && age ? `Name: ${name}, Age: ${age}` : ''}</p>
 </body>
 </html>
             `;
             res.writeHead(200, { 'Content-Type': 'text/html' });
             res.end(responseData);
         }
     } else if (req.method === 'POST') {
         let body = '';
         req.on('data', chunk => {
             body += chunk.toString();
         });
         req.on('end', () => {
             const postData = qs.parse(body);
             const queryString = Object.keys(postData).map(key => `${key}=${encodeURIComponent(postData[key])}`).join('&');
             res.statusCode = 302;
             res.setHeader('Location', `/home.html?${queryString}`);
             res.end();
         });
     }
 });
 
 server.listen(8000, () => {
     console.log('Server running on http://localhost:8000/');
 });
 