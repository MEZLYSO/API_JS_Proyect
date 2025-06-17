const { sendError, sendSucess } = require('../utils/requestHandlers.js')
const userService = require('../services/userServices')

class userController {
  async loginUser(req, res) {
    try {
      const { username, password } = req.body
      const users = await userService.getUser(username, password)
      sendSucess(res, users)
    } catch (error) {
      sendError(res, error.message, 500)
    }
  }
}

module.exports = new userController()
