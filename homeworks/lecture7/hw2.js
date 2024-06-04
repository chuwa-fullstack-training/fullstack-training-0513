/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing only 'hour', 'minute' and 'second' properties.
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * Similarly, when the user requests /api/unixtime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing a 'unixtime' property.
 * {
 *  "unixtime": 1684758896789
 * }
 *
 * HINTS:
 * 1. Use url.parse() method to parse URL strings.
 * 2. response.writeHead(200, { contentType: 'application/json' })
 */

// your code here

const http = require("http");
const url = require("url");

function parseTime(isoString) {
  const date = new Date(isoString);
  return {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  };
}
function unixTime(isoString) {
  const date = new Date(isoString);
  return {
    unixtime: date.getTime(),
  };
}

const server = http.createServer((req, res) => {
  const { url: curURL, method } = req;
  const parsedURL = url.parse(curURL, true);
  const pathname = parsedURL.pathname;
  const query = parsedURL.query;
  if (method === "GET") {
    const isoString = query.iso;
    if (pathname === "/api/parsetime") {
      if (isoString) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(parseTime(isoString)));
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid ISO format" }));
      }
    } else if (pathname === "/api/unixtime") {
      if (isoString) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(unixTime(isoString)));
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid ISO format" }));
      }
    } else {
      res.writeHead(405, { "Content-Type": "application/json" });
      res.end("Method Not Allowed");
    }
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end("Method Not Allowed");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
