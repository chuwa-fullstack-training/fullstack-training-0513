const mongoose = require('mongoose');
// require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://training:shangan@fullstack-training.gw3nkbl.mongodb.net/demo", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;