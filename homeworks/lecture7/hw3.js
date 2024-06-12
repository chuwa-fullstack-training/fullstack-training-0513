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

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  if (method === "GET") {
    if (pathname === "/") {
      res.end("this is the home page");
    } else if (pathname === "/about") {
      res.end("this is the about page");
    } else if (pathname.startsWith("/home.html")) {
      fs.readFile(path.join(__dirname, "home.html"), (err, html) => {
        if (err) {
          res.end("error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(html);
          // Inject query if any
          if (parsedUrl.query) {
            const queryParams = querystring.stringify(parsedUrl.query);
            res.write(`<p>${queryParams.replace(/&/g, "<br>")}</p>`);
          }
          res.end();
        }
      });
    } else {
      res.end("this is the 404 page");
    }
  } else if (method === "POST") {
    if (pathname === "/create-post") {
      let body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const bodyString = Buffer.concat(body).toString();
        const redirectURL = "/home.html?" + bodyString;
        res.statusCode = 302;
        res.setHeader("Location", redirectURL);
        res.end();
      });
    } else {
      res.end("this is the 404 page");
    }
  } else {
    res.end("Unsupported method");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
