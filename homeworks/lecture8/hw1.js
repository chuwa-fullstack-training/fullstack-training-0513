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

const app = express();
const port = 3000;

app.get('/hw1/:dir/:ext',(req,res) => {
    const {dir, ext} = req.params;
    const dicPath= path.join(__dirname, dir);
    const extension = `.${ext}`;

    fs.readdir(dicPath, (err, files)=>{
        if(err){
            res.status(500).send('Error reading the directory');

        }
        const filteredFiles = files.filter(file => path.extname(file) === extension);
        res.send(filteredFiles.join(' '));
    })
})

app.get('/api/parsetime', (req, res) => {
    const {iso} = req.query;
    if(iso){
        const date = new Date(iso);
        const time = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        res.json(time);
    } else {
        res.status(400).send('ISO time string is required');
    }
})

app.get('/api/unixtime', (req, res) => {
    const {iso} = req.query;
    if(iso){
        const date = new Date(iso);
        res.json({ unixtime: date.getTime() });
    } else {
        res.status(400).send('ISO time string is required');
    }
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});