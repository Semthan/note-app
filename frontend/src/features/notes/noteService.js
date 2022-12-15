import axios from "axios";

const API_URL = 'https://note-app-m6ge.onrender.com/note/'

//create new note
const createNote = async (noteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, noteData, config)

  return response.data
}

//get notes
const getNotes = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// delete note
const deleteNote = async (noteId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + noteId, config)

  return response.data
}

const noteService = {
  createNote,
  getNotes,
  deleteNote
}

export default noteService