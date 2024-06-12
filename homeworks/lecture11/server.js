const express = require('express');
const bodyParser = require('body-parser');
require('./database'); // Connect to MongoDB
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
