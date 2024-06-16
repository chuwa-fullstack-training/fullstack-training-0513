require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { firstName, lastName, password } = req.body;

  try {
    const user = await Employee.findOne({ firstName, lastName });
    if (!user) return res.status(400).json({ error: 'Invalid user' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

    const payload = {
      userId: user._id, 
      companyId: user.company
    };

    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1d' });
    res.json({ token });
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;