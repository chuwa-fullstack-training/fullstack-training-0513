/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/hw1/:dir/:ext", (req, res) => {
  const { dir, ext } = req.params;
  const pathname = path.join(__dirname, dir);
  console.log(dir, ext);
  let file;
  fs.readdir(pathname, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: "error" });
    }
    file = files.filter((file) => path.extname(file) === "." + ext);
    console.log(file);
    res.send(file);
  });
});

app.get("/api/:search", (req, res) => {
  const search = req.params.search;
  const iso = req.query.iso;
  console.log(iso);
  const date = new Date(iso);
  let result;
  if (search === "parsetime") {
    result = {
      hour: date.getUTCHours(),
      minutes: date.getUTCMinutes(),
      seconds: date.getUTCSeconds(),
    };
  } else if (search === "unixtime") {
    result = {
      unixtime: date.getTime(),
    };
  } else {
    res.send({ error: "error" });
  }
  res.send(result);
});
app.listen(port, () => console.log("server is running on port " + port));
