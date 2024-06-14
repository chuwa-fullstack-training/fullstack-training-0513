const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const config = require('./config');
const companyRoutes = require('./routes/companies');
const employeeRoutes = require('./routes/employees');
const userRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Add this to parse JSON bodies
app.use(methodOverride('_method'));

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/companies', companyRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/users', userRoutes);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
