const { Router } = require('express')
const userRoutes = Router()
const userController = require('../constrollers/userController')

userRoutes.post("/auth", userController.loginUser)
userRoutes.get("/time/:id", userController.getTimeUser)
userRoutes.get("/times", userController.getTimes)

module.exports = userRoutes
