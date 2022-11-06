const express = require('express');
const router = express.Router();

const noteController = require('../controller/noteController');

router
  .get('/', noteController.getAllNotes)

module.exports = router;
