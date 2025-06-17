const db = require('../database/db')

class userService {
  async getUser(username, password) {
    const users = await db.query("SELECT * FROM Users WHERE Username=? AND Userpassword=?", [username, password])
    return users
  }
}

module.exports = new userService()
