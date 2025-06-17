const { Router } = require('express')
const userRouter = require('./userRoutes.js')

const routes = Router()

//Message Default
routes.get("/", (req, res) => {
  res.json({ message: "Hi not use this API, please :P " })
})
//Routes 
routes.use("/user", userRouter)

module.exports = routes
