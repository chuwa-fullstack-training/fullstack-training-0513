const jwt = require("jsonwebtoken");
const { asyncHandler } = require("./asyncHandler.js");
const Employee = require("../models/employeeModel");

const auth = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Employee.findById(decoded.user.id).select("-password");
  } else {
    req.user = null;
  }
  next();
});

module.exports = { auth };
