const db = require('../database/db')

class userService {
  async getUser(username, password) {
    const user = await db.query("SELECT * FROM Users WHERE Username=? AND Userpassword=?", [username, password])
    return user
  }
}

module.exports = new userService()
