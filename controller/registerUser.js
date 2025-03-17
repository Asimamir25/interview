const User = require("../models/model");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email);
    if (!username || !email || !password) {
      return res.status(400).json({
        success: "fasle",
        message: "Please add usename email password",
      });
    }
    let user = await User.findOne({ email });
    console.log(user);
    if (user) {
      return res.status(201).json({
        success: "faile",
        message: "User Already Exist",
      });
    }
    user = await User.create({
      username,
      email,
      password,
    });
    return res.status(200).json({
      _id: user.id,
      userName: user.username,
      email: user.email,
      password: user.password,
    });
    // const token = await User.generateToken();
  } catch (error) {
    console.log(error);
  }
};
module.exports = { registerUser };
