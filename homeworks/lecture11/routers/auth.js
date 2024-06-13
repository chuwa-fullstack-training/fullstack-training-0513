const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { Employee } = require('../schema');

// login
router.post('/login', async(req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const user = await Employee.findOne({ firstName, lastName });
    if (!user) {
      return res.status(400).json({ message: 'Do not have the user info you provided' });
    }
    const payload = {
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        company: user.company
      }
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

    res.json(token);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;