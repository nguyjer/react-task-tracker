import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Task = ({ task, onDelete, onToggle }) => {
  const [colorIcon, setColorIcon] = useState('red')

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <FaTimes onMouseEnter={() => setColorIcon('gray')}
        onMouseLeave={() => setColorIcon('red')} onClick={() =>
        onDelete(task.id)} style={{ color: colorIcon, cursor: 'pointer' }} /></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task