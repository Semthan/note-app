const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router
  .post('/', userController.registerUser)
  .post('/login', userController.loginUser)
  .post('/me', userController.getMe)