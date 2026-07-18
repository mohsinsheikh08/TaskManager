import React, { useContext } from 'react'
import { TaskProvider } from '../../utils/TasksContext'

const TaskNumber = () => {
  const {createTasks, isDark} = useContext(TaskProvider)
  return (
    <div className={` transition all ease-in-out duraiton-500 ${isDark ?"bg-black text-gray-300 " :"bg-white text-gray-500 " }  py-[5px] px-4 rounded-md`}>
      <p>{createTasks.length === 0 ? "No Task" : "Tasks"} <span>{createTasks.length === 0 ? "" : createTasks.length}</span></p>
    </div>
  )
}

export default TaskNumber
