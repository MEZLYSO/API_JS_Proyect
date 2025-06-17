const { sendError, sendSucess } = require('../utils/requestHandlers.js')
const userService = require('../services/userServices')

class userController {
  async loginUser(req, res) {
    try {
      const { username, password } = req.body
      const user = await userService.getUser(username, password)
      if (user) {
        sendSucess(res, user)
      } else {
        sendError(res, "Not Found", 500)
      }
    } catch (error) {
      sendError(res, error.message, 500)
    }
  }
}

module.exports = new userController()
