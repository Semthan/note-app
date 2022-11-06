const Note = require('../models/noteModel');

exports.addNote = async (req, res) => {
  try {
    const newNote = {
      title: req.body.title,
      content: req.body.content
    }
    const note = await new Note(newNote);
    note.save();
    res.status(200).json(note)
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}