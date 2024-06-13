/**
 * https://hn.algolia.com/api
 *
 * write a router function that takes two query parameters: query1 and query2
 * and returns the partial result from the following query in order:
 * https://hn.algolia.com/api/v1/search?query=query1&tags=story
 * https://hn.algolia.com/api/v1/search?query=query2&tags=story
 *
 * e.g. http://localhost:3000/hw2?query1=apple&query2=banana
 *
 * result from https://hn.algolia.com/api/v1/search?query=apple&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2020-11-12T21:00:12.000Z",
 *   "title": "macOS unable to open any non-Apple application",
 *   ...
 *   }
 * ]}
 * 
 * result from https://hn.algolia.com/api/v1/search?query=banana&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose",
 *   ...
 *   }
 * ]}
 * 
 * final result from http://localhost:3000/hw2?query1=apple&query2=banana:
 * {
 *   "apple":
 *   {
 *     "created_at": "2020-11-12T21:00:12.000Z",
 *     "title": "macOS unable to open any non-Apple application"
 *   },
 *  "banana":
 *  {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose"
 *  }
 * }
 */

const express = require('express')
const http = require('http')
const app = express()
const port = 3000

app.get("/hw2", (req, res) => {
    if (!("query1" in req.query) || !("query2" in req.query)) {
        res.statusCode = 400;
        res.send("400 - Bad Request");
        return; 
    } else {
        let q1 = req.query["query1"], q2 = req.query["query2"];
        console.log(q1);
        console.log(q2);
        let q1res, q2res;
        let promise1 = fetch(`https://hn.algolia.com/api/v1/search?query=${q1}&tags=story`)
        .then(r => r.json() );
        // .then(r => { r.hits[0]; })
        let promise2 = fetch(`https://hn.algolia.com/api/v1/search?query=${q2}&tags=story`)
        .then(r => r.json() );
        Promise.all([promise1, promise2]).then(rarr => {
            let obj = {};
            obj[q1] = {};
            obj[q1]["created_at"] = rarr[0].hits[0]["created_at"];
            obj[q1]["title"] = rarr[0].hits[0]["title"];
            obj[q2] = {};
            obj[q2]["created_at"] = rarr[1].hits[0]["created_at"];
            obj[q2]["title"] = rarr[1].hits[0]["title"];
            res.send(obj);
        }).catch(err => { res.send("Unable to fetch data from source\n"); });
        
    }
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
