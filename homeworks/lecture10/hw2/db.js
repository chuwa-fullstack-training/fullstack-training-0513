const mongoose = require('mongoose');

const pwd = process.env.MONGODB_PWD;
const uri = `mongodb+srv://degjnd:${encodeURIComponent(pwd)}@cluster0.hpelqzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((res) => {
    console.log("Connected");
  }).catch(err => {
    console.log(err);
  });

module.exports = mongoose;