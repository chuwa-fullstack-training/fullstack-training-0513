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

const http = require("http");
const urllib = require("url");

const HOSTNAME = "localhost", PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    let url = new URL(`http://${HOSTNAME}:${PORT}${req.url}`);
    let queryparams = url.searchParams;
    console.log(queryparams);
    if (url.pathname === "/api/parsetime") {
        if (queryparams.has("iso")) {
            res.setHeader("Content-Type", "application/json");
            let date = new Date(queryparams.get("iso"));
            let tmobj = {
                "hour" : date.getUTCHours(),
                "minute" : date.getUTCMinutes(),
                "second" : date.getUTCSeconds()
            };
            res.end(JSON.stringify(tmobj));
        } else {
            res.statusCode = 400;
            res.end("400 - Bad Request\n");
        }
    } else if (url.pathname === "/api/unixtime") {
        if (queryparams.has("iso")) {
            res.setHeader("Content-Type", "application/json");
            let date = new Date(queryparams.get("iso"));
            let tmobj = {
                "unixtime" : date.getTime()
            }
            res.end(JSON.stringify(tmobj));
        } else {
            res.statusCode = 400;
            res.end("400 - Bad Request\n");
        }
    } else {
        res.statusCode = 404;
        res.end("404 - Not Found\n");
    }
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server Listening on ${HOSTNAME} ${PORT}\n`);
})