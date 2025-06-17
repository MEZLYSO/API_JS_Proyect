const { Router } = require('express')
const userRoutes = Router()
const userController = require('../constrollers/userController')

userRoutes.post("/auth", userController.loginUser)

module.exports = userRoutes
