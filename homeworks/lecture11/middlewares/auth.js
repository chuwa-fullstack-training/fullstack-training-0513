const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header('x-auth-token') || req.header('authorization')?.split(' ')[1];

  // if (!token) return res.status(401).json({ error: 'No token, authorization denied' });
  if (!token){
    req.user = null;
    return next();
  }

  try{
    const decoded = await jwt.verify(token, process.env.SECRET);
    // decoded is payload
    req.user = decoded;
    next();
  }
  catch (err){
    res.status(401).json({ error: 'Token is not valid' });
  } 

};