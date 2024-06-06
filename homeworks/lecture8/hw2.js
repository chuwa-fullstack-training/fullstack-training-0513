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
const http = require('https');

const app = express();
const port = 3000;

function requestJSON(url, callback) {
  http.get(url, res => {
    let data = '';
    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      callback(null, JSON.parse(data));
    });
  });
}

app.get('/hw2', (req, res) => {
  const query1 = req.query.query1;
  const query2 = req.query.query2;
  if (!query1 || !query2) {
    return res.status(400).json({ error: 'Please Provide both query1 and query2'});
  }
  const url1 = `https://hn.algolia.com/api/v1/search?query=query1&tags=story`;
  const url2 = `https://hn.algolia.com/api/v1/search?query=query2&tags=story`;

  requestJSON(url1, (err1, data1) => {
    if (err1) {
      return res.status(500).json({ error: `Error in fetch URL1: ${err1.message}`});
    }
    requestJSON(url2, (err2, data2) => {
      if (err2) {
        return res.status(500).json({error: `Error fetching URL2: ${err2.message}`});
      }
      const result1 = data1.hits.length > 0 ? data1.hits[0] : {};
      const result2 = data2.hits.length > 0 ? data2.hits[0] : {};

      const finalResult = {
        [query1]: {
          created_at: result1.created_at,
          title: result1.title
        },
        [query2]: {
          created_at: result2.created_at,
          title: result2.title
        }
      };
      res.json(finalResult);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

