const { Router } = require('express')
const userRouter = require('./userRoutes.js')

const routes = Router()

routes.use("/user", userRouter)

module.exports = routes
