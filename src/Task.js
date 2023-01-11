const Task = props => {
  return (
    <div
      className='task'
      style={{ backgroundColor: props.completed ? 'lightgreen' : 'white' }}
      key={props.id}
    >
      <h1>{props.name}</h1>
      <button
        className='edit-btn'
        onClick={() => props.checkComplete(props.id)}
      >
        Complete
      </button>
      <button className='delete-btn' onClick={() => props.deleteTask(props.id)}>
        X
      </button>
    </div>
  )
}

export default Task
