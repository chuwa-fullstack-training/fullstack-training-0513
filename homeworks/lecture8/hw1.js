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
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

const hw1Router = express.Router();

hw1Router.get('/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const pathname = path.join(__dirname, dir);

  if(!fs.existsSync(pathname)){
    res.status(404).send('Directory does not exist');
    return;
  }

  fs.readdir(pathname, (err, files) =>{
    if(err){
      res.status(500).json({error: err.message});
      return;
    }
    const result = files.filter(file => path.extname(file) === `.${ext}`);
    res.json(result);
  });
});


const hw2Router = express.Router();

hw2Router.get('/parsetime', (req, res) => {
  const iso = req.query.iso;
  if(!iso){
    res.status(400).json({error: "No iso query"})
    return;
  }

  const date = new Date(iso);
  const obj = {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds()
  };
  res.json(obj);
});

hw2Router.get('/unixtime', (req, res) => {
  const iso = req.query.iso;
  if(!iso){
    res.status(400).json({error: "No iso query"})
    return;
  }

  const date = new Date();
  const obj = { unixtime: date.getTime() };
  res.json(obj);
});



app.get('/', (req, res, next) => {
  res.send("This is home page, please include the homework you want to try in URL.")
});

app.use('/hw1', hw1Router);
app.use('/hw2/api', hw2Router);

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});