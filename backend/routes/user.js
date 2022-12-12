const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const { protect } = require('../middleware/authMiddleware')

router
  .post('/', userController.registerUser)
  .post('/login', userController.loginUser)
  .get('/me', protect, userController.getMe)

module.exports = router;