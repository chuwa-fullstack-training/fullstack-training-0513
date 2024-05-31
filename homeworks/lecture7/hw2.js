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
const PORT = 3000;

const getParameters = (query) => {
  let map = new Map();
  if (!query) return map;

  const params = query.split('&');
  for (let p of params) {
    const [key, val] = p.split('=');
    map.set(key, val);
  }

  return map;
}

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url);

  const parameters = getParameters(urlInfo.query);

  if (urlInfo.pathname === '/api/parsetime') {
    if (!parameters.has('iso')) {
      res.end('Please input the time');
    } else {
      const date = new Date(parameters.get('iso'));
      const result = {
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds()
      };
      res.writeHead(200, { contentType: 'application/json' });
      res.write(JSON.stringify(result));
      res.end();
    }
  } else if (urlInfo.pathname === '/api/unixtime') {
    if (!parameters.has('iso')) {
      res.end('Please input the time');
    } else {
      res.writeHead(200, { contentType: 'application/json' });
      res.write(JSON.stringify({
        unixtime: new Date(parameters.get('iso')).getTime()
      }));
      res.end();
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
