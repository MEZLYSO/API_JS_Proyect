require('dotenv').config();
const express = require('express')
const routes = require('./routes/routes')

app = express()

app.use(express.json())
app.use(routes)

//Message default
app.get("/", (req, res) => {
  res.json({ message: "Hi not use this API, please :P " })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`
  ----API SERVER----
  HOST:${process.env.HOST}
  USER:${process.env.USERNAME}
  PASSWORD:${process.env.PASSWORD}
  DB:${process.env.DB}
  
  `)
  console.log(`Serive running in port ${PORT}`)
})
