const { sendError, sendSucess } = require('../utils/requestHandlers.js')
const userService = require('../services/userServices')

class userController {
  async loginUser(_req, res) {
    try {
      const users = await userService.getUser()
      sendSucess(res, users)
    } catch (error) {
      sendError(res, error.message, 500)
    }
  }
}

module.exports = new userController()
