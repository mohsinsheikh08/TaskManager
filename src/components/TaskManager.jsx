import React from 'react'
import Header from './header/Header'
import InputTask from './taskbar/InputTask'
import FilterTasks from './filtertask/FilterTasks'
import TaskPlace from './tasklist/TaskPlace'
import Footer from './footer/Footer'
const TaskManager = () => {
  return (
    <div className='w-full h-[65px]  items-end py-2'>
    <Header />
    <InputTask />
    <FilterTasks />
    <TaskPlace />
    <Footer />
    </div>
  )
}

export default TaskManager
