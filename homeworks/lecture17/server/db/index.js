require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to MongoDB');
  } catch (e) {
    console.log('Error connecting to MongoDB', e);
  }
}

module.exports = connectDB;
