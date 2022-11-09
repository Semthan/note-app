const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json('user already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      })
    }
    else {
      res.status(400).json('invalid user data');
    }
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      })
    } else {
      res.status(400).json('invalid credentials');
    }
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

exports.getMe = async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  try {
    res.status(200).json({
      id: _id,
      name: name,
      email: email,
    })
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
}