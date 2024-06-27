const express = require('express');
const bodyParser = require('body-parser');
require('./connect');
const path = require('path');
const cors = require('cors');

const todoRoutes = require('./routers/todos');
const indexRoutes = require('./routers/index');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
app.use('/api/todos', todoRoutes);
app.use('/', indexRoutes);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
