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

const app = express();

app.get('/hw1/:dir/:ext', (req, res) => {
    const { dir, ext } = req.params;
    fs.readdir(dir, (err, files) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        const filteredFiles = files.filter(file => file.endsWith(`.${ext}`));
        res.json(filteredFiles);
    }
    );
}
);

app.get('/api/parsetime', (req, res) => {
    const { iso } = req.query;
    const date = new Date(iso);
    const result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
    res.json(result);
}
);

app.get('/api/unixtime', (req, res) => {
    const { iso } = req.query;
    const date = new Date(iso);
    const result = {
        unixtime: date.getTime()
    };
    res.json(result);
}
);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}
);

