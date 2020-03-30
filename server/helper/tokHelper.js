"use strict"
const jwt = require('jsonwebtoken');

const generate = (obj) => {
  return jwt.sign(obj,  process.env.SECRET_KEY)
}

const verify = (token) => {
  return jwt.verify(token,  process.env.SECRET_KEY);
}

module.exports = {generate, verify}