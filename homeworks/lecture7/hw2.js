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

const handleParseTime = (date, res) => {
  const obj = {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds()
  };
  res.writeHead(200, { 'content-type' : 'application/json'});
  res.end(JSON.stringify(obj));
};

const handleUnixTime = (date, res) => {
  const obj = {
    unixtime: date.getTime()
  };
  res.writeHead(200, { 'content-type' : 'application/json'});
  res.end(JSON.stringify(obj));
};

const server = http.createServer((req, res) => {
  const { url: reqUrl, method } = req;
  const { pathname, query } = url.parse(reqUrl, true);
  if (method === 'GET') {
    const iso = query.iso;
    if(!iso){
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: "ISO not included in the url" }));
      return;
    }

    const date = new Date(iso);
    if(pathname === '/api/parsetime'){
      handleParseTime(date, res);
    }
    else if(pathname === '/api/unixtime'){
      handleUnixTime(date, res);
    }
    else{
      res.writeHead(404, { 'content-Type' : 'application/json' });
      res.end(JSON.stringify({ error: 'Not Found'}))
    }
  }
  else{
    res.writeHead(405, { 'content-Type' : 'application/json' });
    res.end(JSON.stringify({ error: 'Not this method'}))
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});