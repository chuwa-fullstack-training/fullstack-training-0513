const jwt = require("jsonwebtoken");
const { asyncHandler } = require("../middleware/asyncHandler");
const Employee = require("../models/employeeModel");

const generateToken = (res, userId) => {
  const token = jwt.sign({ user: { id: userId } }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
  });
};

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await Employee.findOne({ firstName: username });

  if (user && user.lastName === password) {
    generateToken(res, user.id);
    res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      company_id: user.company,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

module.exports = { authUser };
