require('dotenv').config({ path: 'homeworks/lecture9/.env' });

const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;
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
