const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', apiRoutes);

// mongoose.connect('mongodb://localhost/employee_db', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

mongoose.connect('mongodb://localhost/employee_db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
