const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token =
    req.header('x-auth-token') ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.employee = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};


