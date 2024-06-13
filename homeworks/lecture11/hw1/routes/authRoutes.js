const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const jwt = require('jsonwebtoken');

const generateToken = (employee) => {
  const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return token;
};

router.post('/login', async (req, res) => {
  try {
    const { firstName, lastName } = req.body;

    // Find the employee by firstName and lastName
    const employee = await Employee.findOne({ firstName, lastName });

    if (!employee) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(employee);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;