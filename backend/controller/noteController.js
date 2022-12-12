const Note = require('../models/noteModel');
const User = require('../models/userModel');

exports.getAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.find({ user: req.user.id })
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
      content: req.body.content,
      user: req.user.id,
    })
    res.status(200).json(note)
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

exports.editNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)

    if (!note) {
      res.status(400).json('Note not found');
    }

    const user = await User.findById(req.user.id)

    //check for user
    if (!user) {
      res.status(401).json('User not found');
    }

    if (note.user.toString() !== user.id) {
      res.status(401).json('user not authorized');
    }
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedNote)
  } catch (error) {
    console.error(error)
    res.status(500).send()
  }
}

exports.deleteOneNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      res.status(400).json('Note not found');
    }

    if (!req.user) {
      res.status(401).json('User not found');
    }

    if (note.user.toString() !== req.user.id) {
      res.status(401).json('user not authorized');
    } else {
      await note.remove();
    }

    res.status(200).json({ id: req.params.id });
  } catch (error) {
    console.error(error)
    res.status(500).send()
  }
}