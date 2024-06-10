const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/employee');
const router = express.Router();

// /api/login
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    let employee = await Employee.findOne({ firstName: username });

    if (!employee || employee.lastName !== password) {
      return res.status(400).send('Invalid Credentials');
    }

    const payload = {
      user: {
        id: employee._id,
        company: employee.company
      }
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
