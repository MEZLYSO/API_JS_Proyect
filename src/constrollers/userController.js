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

  async getTimeUser(req, res) {
    try {
      const { id } = req.params
      const time = await userService.getTimeCareer(id)
      if (!time) {
        sendError(res, "Not Found", 500)
      }
      sendSucess(res, time)
    } catch (error) {
      sendError(res, error.message, 500)
    }
  }
}

module.exports = new userController()
