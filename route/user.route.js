const express = require("express")
const router = express.Router()
const UserController = require("../controller/user.controller")


router.post("/create-user", UserController.createUser )

module.exports = router
