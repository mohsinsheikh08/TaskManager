import React, { useContext } from 'react'
import TaskManager from './components/TaskManager'
import { TaskProvider } from './utils/TasksContext'

const App = () => {
  const {isDark} = useContext(TaskProvider)
  return (
    <div className={`w-full h-screen overflow-hidden px-5 transition all ease-in-out duration-500 bg-gradient-to-tr ${isDark === false ? " from-purple-200 to-red-200" : " from-[#1a1a2e] to-[#243565]"}`}>
    <TaskManager />
    </div>
  )
}

export default App
