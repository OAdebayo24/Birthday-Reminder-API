const express = require("express")
const app = express()
const UserRoute = require("./route/user.route")
// const cors = require("cors")
require("dotenv").config()
const connectDB = require("./db")


connectDB()

const PORT = process.env.PORT

app.use(express.json())
// app.use(cors())


app.use("/api/user", UserRoute)

app.get("/", (req, res) => {
  res.status(200).json({message:"Birthday Reminder API with Cron"})
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})