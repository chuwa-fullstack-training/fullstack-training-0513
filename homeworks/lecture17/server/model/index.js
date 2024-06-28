const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

require('dotenv').config();
// const uri = "mongodb+srv://luo-xy:luoxiaoyan@cluster0.j1neqbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
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