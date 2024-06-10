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
const fs = require('fs');
const path = require('path');
const url = require('url')

const app = express();
const PORT = 3000;


const router1 = express.Router();
router1.get('/:dir/:ext', (req, res)=> {
    const {dir, ext} = req.params;
    const dirPath = path.join(__dirname, dir);
    fs.readdir(dirPath, (err, files)=>{
        if (err){
            res.status(404).json(err.message);
            return;
        }
        const filtered = files.filter(file=>path.extname(file).slice(1)===ext);
    
        res.json(filtered);
    })
})


const router2 = express.Router();
router2.get('/api/parsetime', (req, res)=>{
    const { iso } = req.query;
    if (!iso){
        return res.status(400).json({ error: 'missing query' });
    }
    const date = new Date(iso);
    const dateJSON = {
        hour: date.getHours(), 
        minute: date.getMinutes(), 
        second: date.getSeconds(),
    }
    res.json(dateJSON);
} )

router2.get('/api/unixtime', (req, res)=>{
    const { iso } = req.query;
    if (!iso){
        return res.status(400).json({ error: 'missing query' });
    }
    const date = new Date(iso);
    const unixtime = {unixtime: date.getTime()};
    res.json(unixtime);
})

app.use('/hw1', router1);
app.use('/hw2', router2);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
