/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('this is the home page');
  });

app.get('/about', (req, res)=>{
    res.send('this is the about page');
});

app.get('/home', (req, res)=>{
    const query = req.query;
    let formData = {};
    if (Object.keys(query).length > 0){
        formData = { title: query.title, content: query.content };
    };
    res.render('home', {formData});

});

app.post('/create-post', (req, res)=>{
    const query  = req.body;
    const queryParams = new URLSearchParams(query).toString();
    res.redirect(`/home?${queryParams}`);

});

app.use((req, res) => {
    res.status(404).send('this is the 404 page');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
