const express = require('express');
const hw1Router = require('./hw1');
const hw2Router = require('./hw2');
const hw3Router = require('./hw3');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/hw1', hw1Router);
app.use('/hw2', hw2Router);
app.use('/', hw3Router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
