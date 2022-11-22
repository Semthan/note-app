const express = require('express');
const router = express.Router();
const noteController = require('../controller/noteController');
const { protect } = require('../middleware/authMiddleware');




router
  .get('/', protect, noteController.getAllNotes)
  .post('/', protect, noteController.addNote)

router
  .get('/:id', protect, noteController.getOneNote)
  .put('/:id', protect, noteController.editNote)
  .delete('/:id', protect, noteController.deleteOneNote)

module.exports = router;
