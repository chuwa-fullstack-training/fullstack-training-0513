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
const app = express();
const PORT = 3000;

const fetchData = (url) => {
    try {
        return fetch(url)
            .then(data => data.json())
            .then(data => {
                const result = {
                    created_at: data.hits[0].created_at,
                    title: data.hits[0].title
                };
                console.log(result);
                return result;
            })
    } catch (err) {
        return err;
    }
}


app.get('/hw2', (req, res) => {
    const { query1, query2 } = req.query;

    if (!query1 || !query2) {
        return res.status(400).json({ error: 'Both query1 and query2 are required.' });
    }

    const url1 = `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`;
    const url2 = `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`;
    let result = {};

    try {
        fetchData(url1)
            .then(data => {
                result[query1] = data;
                return fetchData(url2);
            })
            .then(data => {
                result[query2] = data;
                return result;
            })
            .then((data) => {
                res.json(data);
            })

    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }

});

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});


// test: http://localhost:3000/hw2?query1=apple&query2=banana