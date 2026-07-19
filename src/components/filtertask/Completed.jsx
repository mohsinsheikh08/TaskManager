import React from 'react'
import {CircleCheck} from 'lucide-react'
import { useContext } from 'react';
import { TaskProvider } from '../../utils/TasksContext';
const Completed = () => {
    const {setTaskFilter, TaskFilter, isDark} = useContext(TaskProvider);
  return (
  <div className={`  transition all ease-in-out duration-500  ${TaskFilter === 'completed' ? (isDark ? "bg-[#aa9ff6] text-white" : "text-white bg-[#6F64E3]"): (isDark ? "text-white bg-black" : "text-black bg-white")} px-2 py-1 rounded-md`}>
      <button onClick={() => {setTaskFilter('completed')}} className='flex w-27 justify-between items-center'><span className="responsive4">Completed</span><CircleCheck className='text-[#08A455]' size={20} /></button>
    </div>
  )
}

export default Completed
