const db = require('../database/db')

class userService {
  async getUser(username, password) {
    const user = await db.query("SELECT * FROM Users u INNER JOIN Participants p ON u.IDUser = p.IDUser WHERE u.Username = ? AND u.Userpassword = ? ", [username, password])
    if (user.length > 0) {
      return user
    } else {
      return null
    }
  }
}

module.exports = new userService()
