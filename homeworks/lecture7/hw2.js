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
const path = require("path");
const url = require("url");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const parseurl = url.parse(req.url, true); //设置为true可以把字符串解析为一个对象
  console.log(parseurl);
  const pathname = parseurl.pathname;
  const iso = parseurl.query.iso;
  const date = new Date(iso);
  let result;
  if (pathname === "/api/parsetime") {
    result = {
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds(),
    };
  } else if (pathname === "/api/unixtime") {
    result = { unixtime: date.getTime() };
  } else {
    res.writeHead(404, { contentType: "application/json" });
    res.end(JSON.stringify({ error: "error" }));
  }

  //   res.writeHead(200, { contentType: "application/json" });//可以省略,状态码会默认设置成200,但是不设置响应头,客户端将不知道数据的具体格式
  res.end(JSON.stringify(result));
  //   res.end(JSON.stringify({ message: "hello hw2" }));
});

server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
