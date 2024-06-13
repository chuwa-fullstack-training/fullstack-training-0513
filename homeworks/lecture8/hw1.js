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

const express = require('express')
const path = require("path")
const fs = require('fs')
const app = express()
const port = 3000

const router_hw1 = express.Router();

router_hw1.get("/:dir/:ext", (req, res) => {
    let dir = req.params.dir, ext = req.params.ext;
    try {
        let files = fs.readdirSync(dir);
        let resstr = "";
        files.forEach((file) => {
            if (path.extname(file) === `.${ext}`) {
                if (resstr.length > 0) { resstr += ", "; }
                resstr += file;
                
            }
        });
        res.send(resstr);
    } catch (error) {
        res.statusCode = 400;
        res.send("400 - Bad Request\n");
    }
});

const router_hw2 = express.Router();

// /api/parsetime?iso=2023-05-22T12:34:56.789Z
router_hw2.get("/api/parsetime", (req, res) => {
    if ("iso" in req.query) {
        res.setHeader("Content-Type", "application/json");
        let date = new Date(req.query["iso"]);
        let tmobj = {
            "hour" : date.getUTCHours(),
            "minute" : date.getUTCMinutes(),
            "second" : date.getUTCSeconds()
        };
        res.send(JSON.stringify(tmobj));
    } else {
        res.statusCode = 400;
        res.send("400 - Bad Request\n");
    }
});

// /api/unixtime?iso=2023-05-22T12:34:56.789Z
router_hw2.get("/api/unixtime", (req, res) => {
    if ("iso" in req.query) {
        res.setHeader("Content-Type", "application/json");
        let date = new Date(req.query["iso"]);
        let tmobj = {
            "unixtime" : date.getTime()
        }
        res.send(JSON.stringify(tmobj));
    } else {
        res.statusCode = 400;
        res.send("400 - Bad Request\n");
    }
});


app.use("/hw1", router_hw1);
app.use("/hw2", router_hw2);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})