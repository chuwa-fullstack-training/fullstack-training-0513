const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token =
    req.header('x-auth-token') ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  if (!token) {
    req.user = null;
    next();
  } else {
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
};
