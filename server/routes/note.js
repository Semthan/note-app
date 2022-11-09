const express = require('express');
const router = express.Router();

const noteController = require('../controller/noteController');

router
  .get('/', noteController.getAllNotes)
  .post('/', noteController.addNote)

router
  .get('/:id', noteController.getOneNote)
  .put('/:id', noteController.editNote)
  .delete('/:id', noteController.deleteOneNote)

module.exports = router;
