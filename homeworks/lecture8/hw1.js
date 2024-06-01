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
const PORT = 3000;
const fs = require('fs');
const path = require('path');

app.get('/hw1/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  fs.readdir(dir, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      const files = data.filter(file => path.extname(file) === `.${ext}`);
      res.status(200).send(files);
    }
  });
});

app.get('/api/parsetime', (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  if (!iso || date.toString() === 'Invalid Date') {
    res.status(400).send('Invalid Date');
  } else {
    const result = {
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds()
    };
    res.status(200).json(result);
  }
});

app.get('/api/unixtime', (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  if (!iso || date.toString() === 'Invalid Date') {
    res.status(400).send('Invalid Date');
  } else {
    res.status(200).json({unixtime: date.getTime()});
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
