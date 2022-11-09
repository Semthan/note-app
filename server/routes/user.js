const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router
  .post('/', userController.registerUser)
  .post('/login', userController.loginUser)
  .get('/me', userController.getMe)

module.exports = router;