import React, { useContext } from 'react'
import { TaskProvider } from '../../utils/TasksContext'

const TaskMeasure = () => {
    const {isDark, createTasks} = useContext(TaskProvider)
    const totalTask = createTasks.length
    const CompleteTask = createTasks.filter(task => task.isComplete === true).length;
    const percentage = totalTask === 0 ? 0 : Math.floor((CompleteTask / totalTask) * 100);
    console.log(totalTask,CompleteTask,percentage)
  return (
    <div className='w-50 mt-1 '>
      <p className={`text-[13px] transition all duration-500 ease-in-out ${isDark ? " text-white" : "text-black"} mb-1`}><span>{CompleteTask}</span> of <span>{totalTask}</span> tasks Completed</p>
      <div className='w-full h-2 rounded-full bg-white'>
        <div style={{width : `${percentage}%`}} className={`h-full rounded-full ${isDark ? "bg-[#aa9ff6]" : "bg-[#6F64E3]"} `}></div>
      </div>
    </div>
  )
}

export default TaskMeasure
