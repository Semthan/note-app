import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createNote} from '../features/notes/noteSlice'

function NoteForm() {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createNote({title, content}))
    setTitle('')
    setContent('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="title"
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input
            type="content"
            name='content'
            id='content'
            value={content}
            onChange={(e) => setContent(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block"
          type='submit'>
            Add Note
          </button>
        </div>
      </form>
    </section>
  )
}

export default NoteForm