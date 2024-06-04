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
const path = require("path");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const { url: curURL, method } = req;
  if (method === "GET") {
    if (curURL === "/") {
      res.end("this is the home page");
    } else if (curURL === "/about") {
      res.end("this is the about page");
    } else if (curURL.startsWith("/home.html")) {
      fs.readFile(path.join(__dirname, "home.html"), (err, html) => {
        if (err) {
          res.end("error");
        } else {
          const query = url.parse(curURL, true).query;
          res.writeHead(200, { "Content-Type": "text/html" });

          let modifiedHtml = undefined;
          if (query.title || query.content) {
            modifiedHtml = html.toString().replace(
              '<div id="submitted-data"></div>',
              `<div id="submitted-data">
                <h2>Submitted Data:</h2>
                <p>Title: ${query.title}</p>
                <p>Content: ${query.content}</p>
                </div>`
            );
          }
          res.write(modifiedHtml || html);
          res.end();
        }
      });
    } else {
      res.end("this is the 404 page");
    }
  } else if (method === "POST") {
    if (curURL === "/create-post") {
      let body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        let parsedData = querystring.parse(parsedBody);
        res.statusCode = 302;
        res.setHeader(
          "Location",
          `/home.html?title=${parsedData.title}&content=${parsedData.content}`
        );
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
