"use strict"
module.exports=(err, req, res, next) =>{
  console.log(err.errors)
 if (err.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json({ message : ['email is already taken']})
  } else if (err.name === 'SequelizeValidationError') {
    const error = err.errors.map(x => x.message)
    res.status(400).json({message : error})
  }
}