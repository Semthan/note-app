const Note = require('../models/noteModel');

exports.getAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.find({})
    res.status(200).json(allNotes)
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

exports.getOneNote = async (req, res) => {
  try {
    const noteID = req.params.id;
    const note = await Note.findById(noteID);
    res.status(200).json(note);
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

exports.addNote = async (req, res) => {
  try {
    const note = await Note.create({
      title: req.body.title,
      content: req.body.content
    })
    res.status(200).json(note)
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

exports.editNote = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedNote)
  } catch (error) {
    console.error(error)
    res.status(500).send()
  }
}

exports.deleteOneNote = async (req, res) => {
  try {
    const noteID = req.params.id;
    const deletedNote = await Note.findByIdAndDelete(noteID);
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error(error)
    res.status(500).send()
  }
}