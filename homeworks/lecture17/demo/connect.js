require('dotenv').config({ path: 'homeworks/lecture10/.env' });

const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://liyux:chuwaBestTeam@recipe.mqzojkr.mongodb.net/chuwaLec10";
console.log('MongoDB URI:', mongoURI); 

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

module.exports = mongoose;
