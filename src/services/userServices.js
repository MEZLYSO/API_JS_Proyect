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

  async getTimeCareer(id) {
    const times = await db.query("SELECT * FROM TimeResults WHERE IDParticipant=?", [id])
    if (times.length > 0) {
      return times
    } else {
      return null
    }
  }

  async getTimes() {
    const times = await db.query("SELECT * FROM Participants p INNER JOIN TimeResults t ON p.IDParticipant = t.IDParticipant")
    if (times.length > 0) {
      return times
    } else {
      return null
    }
  }

}

module.exports = new userService()
