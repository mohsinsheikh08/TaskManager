import React from 'react'
import { Circle } from 'lucide-react'
import { useContext } from 'react';
import { TaskProvider } from '../../utils/TasksContext';
const ActiveTask = () => {

    const {setTaskFilter, TaskFilter, isDark} = useContext(TaskProvider);
  return (
  <div className={` transition all ease-in-out duration-500  ${TaskFilter === 'active' ? (isDark ? "bg-[#aa9ff6] text-white" : "text-white bg-[#6F64E3]"): (isDark ? "text-white bg-black" : "text-black bg-white")} px-2 py-1 rounded-md`}>
      <button onClick={()=> {setTaskFilter('active')}} className='flex w-18 justify-between items-center'><span className='responsive4'>Active</span> <Circle size={20} /></button>
    </div>
  )
}

export default ActiveTask
