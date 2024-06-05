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

const express = require('express');
const https = require('https');
const app = express();

app.get('/hw2', (req, res) => {
    const { query1, query2 } = req.query;
    const url1 = `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`;
    const url2 = `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`;
    const k1 = "created_at";
    const k2 = "title";
    Promise.all([getJSON(url1), getJSON(url2)])
        .then(([response1, response2]) => {
        const result = {
            [query1]: { [k1]: response1.hits[0][k1], [k2]: response1.hits[0][k2]},
            [query2]: { [k1]: response2.hits[0][k1], [k2]: response2.hits[0][k2]}
        };
        res.json(result);
        })
        .catch(err => res.status(500).json({ error: err.message }));
    });

function getJSON(url) { 
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'request'
            }
        };
        const request = https.get(url, options, response => {
            if (response.statusCode !== 200) {
                reject(`Did not get an OK from the server. Code: ${response.statusCode}`);
                response.resume();
            }
            let data = '';
            response.on('data', chunk => {
                data += chunk;
            });
            response.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(new Error(e.message));
                }
            });
        });
        request.on('error', err => {
            reject(`Encountered an error trying to make a request: ${err.message}`);
        });
    });
}

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});