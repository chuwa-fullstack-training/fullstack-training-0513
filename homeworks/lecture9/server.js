require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./router');
const PORT = 3000;

app.use(express.json());
app.use('/api', router);

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Cannot connect MongoDB: ', err));