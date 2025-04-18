const express = require("express")
const app = express()
const path = require("path")
const UserRoute = require("./route/user.route")
// const cors = require("cors")
require("dotenv").config()
const connectDB = require("./db")


connectDB()

const PORT = process.env.PORT

app.use(express.json())
// app.use(cors())


app.use("/api/users", UserRoute)

app.use("/", express.static(path.join(__dirname, "public")))

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})