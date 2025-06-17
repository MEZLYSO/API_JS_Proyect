const db = require('../database/db')

class userService {
  async getUser() {
    const users = await db.query("SELECT * FROM Users")
    return users
  }
}

module.exports = new userService()
