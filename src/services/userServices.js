const db = require('../database/db')

class userService {
  async getUser(username, password) {
    const user = await db.query("SELECT * FROM Users WHERE Username=? AND Userpassword=?", [username, password])
    if (user.length > 0) {
      return user
    } else {
      return null
    }
  }
}

module.exports = new userService()
