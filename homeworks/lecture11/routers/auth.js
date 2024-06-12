const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { Employee } = require('../schema');

router.post('/login', async(req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    return res.status(400).json({ message: 'Please provide both first name and last name' });
  }
  try {
    const user = await Employee.findOne({ firstName, lastName });
    if (!user) {
      return res.status(400).json({ message: 'Do not have the user info you provided' });
    }
    const payload = {
      user: {
        id: user.id,
        company: user.company
      }
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

    res.json(token);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;