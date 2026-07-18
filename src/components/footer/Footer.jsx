import React from 'react'
import DeleteAll from '../tasklist/DeleteAll'
import TaskMeasure from '../tasklist/TaskMeasure'

const Footer = () => {
  return (
    <div className={`flex justify-between items-start `}>
      <TaskMeasure />
      <DeleteAll />
    </div>
  )
}

export default Footer
