"use strict"
const { User } = require('../models')
const { generate } = require('../helper/tokHelper')
const { compare } = require('../helper/passHelper')

class UserContoller {
  static register = async (req, res, next) => {
    try {
      const {username, email, password} = req.body
      const body = {username, email, password}
      const newUser = await User.create(body)
      res.status(201).json(newUser)
    } catch (error) {
       next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const {email, password} = req.body
      const loginUser = await User.findOne({where : {email}})
      if(loginUser) {
        if (compare(password, loginUser.password) ) {
          res.status(200).json({access_token : generate({email : loginUser, id : loginUser.id,}), username : loginUser.username})
        } else {
          res.status(400).json({message : 'email or password wrong'})
        }
      } else {
        res.status(404).json({message : `email or password wrong`})
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserContoller