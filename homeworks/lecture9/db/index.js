const mongoose = require('mongoose');

// require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://training:shangan@fullstack-training.gw3nkbl.mongodb.net/demo", {
            useNewUrlParser: true,
    useUnifiedTopology: true
        });
        console.log('Connect to MongoDB');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;