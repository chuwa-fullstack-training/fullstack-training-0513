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

const server = http.createServer((req, res) => {
    const { url : reqURL, method } = req;
    const { pathname, query } = url.parse(reqURL, true);
    const iso = query.iso;

    if (method === 'GET') {
        if (iso) {
            const d = new Date(iso);
            if (pathname === '/api/parsetime') {
                const result = {
                    hour: d.getUTCHours(),
                    minute: d.getUTCMinutes(),
                    second: d.getUTCSeconds()
                }

                res.writeHead(200, { contentType: 'application/json'});
                res.end(JSON.stringify(result));

            } else if (pathname === '/api/unixtime') {
                const result = {
                    unixtime: d.getTime()
                }
                res.writeHead(200, { contentType: 'application/json'});
                res.end(JSON.stringify(result));
            } else {
                res.end("This is the 404 page.");
            }
        } 
        else {
            res.end('Please include a time in url with formate "?iso=time"');
        }
    } else {
        res.end('Unsupported method.');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})