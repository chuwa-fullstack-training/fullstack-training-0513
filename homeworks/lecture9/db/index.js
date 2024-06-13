const mongoose = require('mongoose');

// require('dotenv').config();
const uri = "mongodb+srv://luo-xy:luoxiaoyan@cluster0.j1neqbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
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