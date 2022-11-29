function NoteITem({note}) {
  return (
    <div className="goal">
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    </div>
  )
}

export default NoteITem