const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { getEmployeeById } = require("./queries");
const secretOrKey = process.env.JWT_TOKEN; // This should be an environment variable in a real application

console.log(process.env.JWT_TOKEN);