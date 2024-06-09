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
const url = require('url')
const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url,true);
  const {pathname, query} = parsedUrl;
  const iso = query.iso;
  if (req.method === "GET"){
    if (pathname === '/api/parsetime'){
        if (!iso){
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'missing query' }));
            return;
        }
        const date = new Date(iso);
        const dateJSON = {
            hour: date.getHours(), 
            minute: date.getMinutes(), 
            second: date.getSeconds(),
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(dateJSON));
    } else if (pathname === '/api/unixtime'){
        if (!iso){
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'missing query' }));
            return;
        }
        const date = new Date(iso);
        const unixtime = {unixtime: date.getTime()};
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(unixtime));
    }
  };
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


