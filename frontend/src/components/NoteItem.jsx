
import { useDispatch } from 'react-redux'
import { deleteNote } from '../features/notes/noteSlice'

function NoteITem({note}) {
  const dispatch = useDispatch()

  return (
    <div className="goal">
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <button onClick={() => dispatch(deleteNote(note._id))} className='close'>
          X
        </button>
      </div>
    </div>
  )
}

export default NoteITem