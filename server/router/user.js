"use strict"
const router = require('express').Router()
const userController = require('../controllers/userController')

router
    .post('/register', userController.register)
    .post('/login', userController.login)

  module.exports = router