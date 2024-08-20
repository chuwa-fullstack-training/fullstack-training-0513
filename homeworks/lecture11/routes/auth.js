// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { firstName, lastName } = req.body;
  const user = await Employee.findOne({ firstName, lastName });
  
  if (!user) return res.status(400).send('Invalid credentials');

  const token = jwt.sign({ id: user._id, company: user.company }, 'your_jwt_secret');
  res.json({ token });
});

module.exports = router;
