const mongoose = require("mongoose")
require("dotenv").config

CONNECTION_URI = process.env.MONGO_CONNECTION_URI

const dbConnection = () => {
  mongoose.connect(CONNECTION_URI)

  mongoose.connection.on("connected", ()=> {
    console.log("Connected DB successfully")
  })
  
  mongoose.connection.on("error", (error) => {
    console.log(error)
    console.log("Error occured during connection to DB")
  })
}

module.exports = dbConnection