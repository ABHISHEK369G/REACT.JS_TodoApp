import React from 'react'
import './task.scss'

const Task = ({title,description,index,deletetask,edittask}) => {
  




  return (
    <div className='task'>
    <div>
        <p>{title}</p>
        <span>{description}</span>
    </div>
      <button onClick={() => deletetask(index)} >-</button>
      <button className="update" onClick={() => edittask(index)} >+</button>
    </div>
     
     

 
  )
}



export default Task
