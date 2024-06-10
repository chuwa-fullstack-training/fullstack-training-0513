const express = require("express");
const userRoutes = express.Router();
const { authUser } = require("../controllers/userCotroller");
userRoutes.route("/login").post(authUser);
module.exports = userRoutes;
