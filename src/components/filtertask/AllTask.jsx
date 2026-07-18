import React, { useContext } from 'react'
import {List } from 'lucide-react'
import { TaskProvider } from '../../utils/TasksContext'
const AllTask = () => {
  const {setTaskFilter, TaskFilter, isDark} = useContext(TaskProvider);
  return (
    <div className={` transition all ease-in-out duration-500  ${TaskFilter === 'all' ? (isDark ? "bg-[#aa9ff6] text-white" : "text-white bg-[#6F64E3]"): (isDark ? "text-white bg-black" : "text-black bg-white")} px-2 py-1 rounded-md`}>
      <button onClick={() => {setTaskFilter('all')}} className='flex  px-2 gap-2 items-center  '>All<List size={20} /> </button>
    </div>
  )
}

export default AllTask
