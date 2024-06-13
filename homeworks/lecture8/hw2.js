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
const https = require('https');
const PORT = 3000;

const fetchFromApi = (query) =>{
  const url = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const hw2Router = express.Router();

hw2Router.get('/', async (req, res) => {
  const query1 = req.query.query1;
  const query2 = req.query.query2;

  if(!query1 || !query2){
    res.status(400).json({error: "Missing query parameters"});
    return;
  }

  try {
    const [result1, result2] = await Promise.all([fetchFromApi(query1), fetchFromApi(query2)]);

    const response = {
      [query1]: {
        created_at: result1.hits[0].created_at,
        title: result1.hits[0].title,
      },
      [query2]: {
        created_at: result2.hits[0].created_at,
        title: result2.hits[0].title,
      }
    };

    res.json(response)
  }
  catch (err) {
    res.status(500).json({error: err.message});
  }
});


app.get('/', (req, res) => {
  res.send("This is the home Page.");
});

app.use('/hw2', hw2Router);

app.get('*', (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});