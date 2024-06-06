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
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3000;
//The first route for list the given extension name file in the current directory
app.get('/hw1/:dir/:ext', (req, res) => {
  const dir = req.params.dir;
  const directoryPath = path.join(__dirname, dir);
  const expectExtension = '.' + req.params.ext;
  fs.readdir(directoryPath, (err, data) => {
    if (err) {
      return res.status(500).send(`Error read directory content: ${err.message}`)
    }
    //Filter by extension of the files
    const resultFiles = data.filter(file => path.extname(file) === expectExtension);
    res.send(resultFiles.join('\n'));
  });
});

//Route 2 for process /api/parsetime and /api/unixtime request
app.get('/api/parsetime', (req, res) => {
  const iso = req.query.iso;
  if (!iso) {
    return res.status(400).json({ error: 'Do not have iso query parameter'});
  }
  const date = new Date(iso);
  const result = {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds()
  };
  res.json(result);
});

app.get('/api/unixtime', (req,res) => {
  const iso = req.query.iso;
  if (!iso) {
    return res.status(400).json({ error: 'Do not have iso query parameter.'});
  }
  const date = new Date(iso);
  const result = {
    unixtime: date.getTime()
  };
  res.json(result);
});

app.listen(port, () => {
  console.log(`Sever is listening on port ${port}`);
});


//Test:
//1. http://localhost:3000/api/parsetime?iso=2023-05-22T12:34:56.789Z
//2. http://localhost:3000/api/unixtime?iso=2023-05-22T12:34:56.789Z
//3. http://localhost:3000/hw1/testDir/txt
//4. http://localhost:3000/hw1/testDir/md
