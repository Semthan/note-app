const Note = require('../models/noteModel');

exports.getAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.find({})
    res.status(200).json(allNotes)
  } catch (error) {
    console.error(err)
    res.status(500).send
  }
}

exports.getOneNote = async (req, res) => {
  try {
    const noteID = req.params.id;
    const note = await Note.findById(noteID);
    res.status(200).json(note);
  } catch (error) {
    console.error(err)
    res.status(500).send
  }

}

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