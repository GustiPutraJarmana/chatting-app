"use strict"
const bcrypt = require('bcrypt')
const saltRounds = 10

const hash = (password) => {
  return bcrypt.hashSync(password, saltRounds);
}

const compare = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

module.exports = {hash, compare}