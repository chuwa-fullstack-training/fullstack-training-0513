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

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

// hw 1 with params
// http://localhost:3000/hw1/dir/txt
app.get('/hw1/:dir/:ext', (req, res) => {
    const dir = req.params.dir;
    const ext = req.params.ext;

    const dirPath = path.join(__dirname, dir);
    const designatedExtension = '.' + ext;

    fs.readdir(dirPath, (err, files) => {
        if (err) {
            throw err;
        } else if (designatedExtension) {
            files = files.filter(file => path.extname(file) === designatedExtension);
        }

        res.json(files);
    })
});


// test: http://localhost:3000/hw1/hw1TestDir/txt

// hw 2 with query strings
app.get('/api/parsetime', (req, res) => {
    const iso = req.query.iso;
    if (iso) {
        const d = new Date(iso);
        const result = {
            hour: d.getUTCHours(),
            minute: d.getUTCMinutes(),
            second: d.getUTCSeconds()
        };

        res.json(result);

    } else {
        res.send('Please include a time in url with formate "?iso=time"');
    }
});

app.get('/api/unixtime', (req, res) => {
    const iso = req.query.iso;
    if (iso) {
        const d = new Date(iso);
        const result = {
            unixtime: d.getTime()
        }

        res.json(result);
    } else {
        res.send('Please include a time in url with formate "?iso=time"');
    }
});

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
})

// test: http://localhost:3000/api/parsetime?iso=2023-05-22T12:34:56.789Z
// test: http://localhost:3000/api/unixtime?iso=2023-05-22T12:34:56.789Z