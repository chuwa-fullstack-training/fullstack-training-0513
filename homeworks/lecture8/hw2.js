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
const https = require('https');

const fetchData = (query) => {
  const url = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`;
  const errorMsg = '`Encountered an error trying to make a request';
  return new Promise((resolve, reject) => {
    const request = https.get(url, res => {
      if (res.statusCode !== 200) {
        reject(errorMsg);
        res.resume();
      } else {
        let data = '';
        res.on('data', chunk => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            data = JSON.parse(data);
            resolve({
              created_at: data.hits[0].created_at,
              title: data.hits[0].title
            });
          } catch (e) {
            reject(e.message);
          }
        });
        request.on('error', err => {
          reject(errorMsg);
        });
      }
    });
  });
}

app.get('/hw2', (req, res) => {
  const { query1, query2 } = req.query;
  if (!query1 || !query2) {
    res.status(400).send('Please enter two query parameters');
  } else {
    const promises = [fetchData(query1), fetchData(query2)];
    Promise.allSettled(promises).then(result => {
      const data = {};
      data[query1] = result[0].value;
      data[query2] = result[1].value;
      res.status(200).json(data);
    })
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
