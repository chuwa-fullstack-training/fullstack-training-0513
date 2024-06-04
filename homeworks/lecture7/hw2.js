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
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  //console.log(parsedUrl);

  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;
  const iso = query.iso;
  if (!iso) {
    res.writeHead(400, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({error: 'Please make sure have iso in your url'}));
    return;
  }

  const date = new Date(iso);
  // /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
  //respond with 'hour', 'minute' and 'second' properties.
  if (pathname === '/api/parsetime') {
    const result = {
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds()
    };
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
  } else if (pathname === '/api/unixtime') {
    const result = {
      unixtime: date.getTime()
    };
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({error: 'Path name not found!'}));
  }
});

server.listen(3000,() => {
  console.log('Sever listening on port 3000');
});

//Test with:
//http://localhost:3000/api/unixtime?iso=2023-05-22T12:34:56.789Z
//http://localhost:3000/api/parsetime?iso=2023-05-22T12:34:56.789Z