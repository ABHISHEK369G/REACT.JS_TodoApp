import React from 'react'
import './task.scss'

const Task = ({title,description,index,deletetask}) => {
  




  return (
    <div className='task'>
    <div>
        <p>{title}</p>
        <span>{description}</span>
    </div>
      <button onClick={() => deletetask(index)} >-</button>

    </div>
  )
}

export default Task
