import './Todo.css'
export default function Todo({text,updateMode,deletetodo}) {
  return (
    <>
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <div className='icon' onClick={updateMode}>Update</div>
            <div className='icon' onClick={deletetodo}>Delete</div>

        </div>
    </div>

    </>
  )
}
