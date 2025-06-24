const { sendError, sendSucess } = require('../utils/requestHandlers.js')
const userService = require('../services/userServices')
const TimeRequest = require('../utils/TimeRequest.js')

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
        sendSucess(res, TimeRequest)
      } else {
        sendSucess(res, time)
      }
    } catch (error) {
      sendError(res, error.message, 500)
    }
  }

  async getTimes(_req, res) {
    try {
      const times = await userService.getTimes()
      if (times) {
        sendSucess(res, times)
      } else {
        sendError(res, "Not Found", 500)
      }
    } catch (error) {
      sendError(res, error.message, 500)
    }
  }

}

module.exports = new userController()
