const UserModel = require("../model/user.model")


const createUser = async (req, res) => {

  try {
    const { name, email, DateOfBirth } = req.body;

    if (!name || !email || !DateOfBirth) {
      return res
        .status(400)
        .json({ success: false, message: "Enter correct information" });
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(401).json({ success: false, message: "User already exist" });
    }

    const userData = await UserModel.create({
      name,
      email,
      DateOfBirth,
    });

    const newUser = await userData.save();

    return res.status(200).json({
      success: true,
      message: "User successfully created",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
  
}

module.exports = { createUser }