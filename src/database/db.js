const mysql = require('mysql2/promise')

const config = {
  host: process.env.HOST,
  user: "sql10785119",
  password: process.env.PASSWORD,
  database: process.env.DB,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0
}

const pool = mysql.createPool(config)

class Database {
  async query(sql, values) {
    const cn = await pool.getConnection()
    try {
      const [result] = await cn.query(sql, values)
      return result
    } finally {
      cn.release()
    }
  }
}

module.exports = new Database()
