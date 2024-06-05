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
const PORT = 3000;
const url = require('url');

const sendJsonResponse = (res, statusCode, response) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response));
};

const handleParseTime = (iso) => {
  const date = new Date(iso);
  return {
    hour: date.getUTCHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
};

const handleUnixTime = (iso) => {
  const date = new Date(iso);
  return {
    unixtime: date.getTime()
  };
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const parsedUrl = url.parse(req.url, true);
    const {pathname, query} = parsedUrl;
    if (query.iso) {
      if (pathname === '/api/parsetime') {
        sendJsonResponse(res, 200, handleParseTime(query.iso));
      } else if (pathname === '/api/unixtime') {
        sendJsonResponse(res, 200, handleUnixTime(query.iso));
      } else {
        sendJsonResponse(res, 404, { error: 'Not Found' });
      }
    } else {
      sendJsonResponse(res, 400, { error: 'Missing iso query parameter' });
    }
  } else {
    sendJsonResponse(res, 404, {error: 'Unsupported method'});
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});