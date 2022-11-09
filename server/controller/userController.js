const User = require('../models/userModel');
const router = require('../routes/user');

exports.registerUser = async (req, res) => {
  try {
    res.status(200).json('register')
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

exports.loginUser = async (req, res) => {
  try {
    res.status(200).json('login user')
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

exports.getMe = async (req, res) => {
  try {
    res.status(200).json('me')
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

module.exports = router;