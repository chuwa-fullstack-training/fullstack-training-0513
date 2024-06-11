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
const app = express();
const fs = require('fs');
const url = require('url');

const port = 3000;


app.get('/hw1/:dir/:ext', (req, res) => {
    const dir = req.params.dir;
    const ext = req.params.ext;
    const directoryPath = path.join(__dirname, dir);

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }

        const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
        res.send(filteredFiles.join('\n'));
    });
});

app.get('/api/parsetime', (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const isoDate = queryObject.iso;

    if (!isoDate) {
        return res.status(400).send({ error: 'no iso parameter' });
    }

    const date = new Date(isoDate);

    const response = {
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
});

app.get('/api/unixtime', (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const isoDate = queryObject.iso;

    if (!isoDate) {
        return res.status(400).send({ error: 'no iso parameter' });
    }

    const date = new Date(isoDate);

    const response = {
        unixtime: date.getTime()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
