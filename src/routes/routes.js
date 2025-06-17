const { Router } = require('express')
const userRouter = require('./userRoutes.js')

const routes = Router()

//Routes 
routes.use("/user", userRouter)

module.exports = routes
