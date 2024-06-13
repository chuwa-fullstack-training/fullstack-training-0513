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

const hw1Router = express.Router();

hw1Router.get('/:dir/:ext', (req, res) => {
    const directory = path.join(__dirname, 'hw1', req.params.dir); // 修改路径拼接
    const extension = `.${req.params.ext}`;

    fs.readdir(directory, (err, files) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }

        const filteredFiles = files.filter(file => path.extname(file) === extension);
        res.json(filteredFiles);
    });
});

module.exports = hw1Router;
