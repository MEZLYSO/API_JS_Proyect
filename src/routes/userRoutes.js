const { Router } = require('express')
const userRoutes = Router()
const userController = require('../constrollers/userController')

userRoutes.get("/", userController.loginUser)

module.exports = userRoutes
