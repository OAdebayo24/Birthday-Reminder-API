const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  DateOfBirth: {
    type: Date,
    required: true
  }
})


module.exports = mongoose.model("User", UserSchema)