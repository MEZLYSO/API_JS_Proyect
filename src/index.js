const express = require('express')

app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "Hi" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Serive running in port ${PORT}`)
})
