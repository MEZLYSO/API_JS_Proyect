import express from 'express'

app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "Hi" })
})

app.listen(3000, () => {
  console.log("Serive running in port 3000")
})
