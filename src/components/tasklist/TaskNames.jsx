import React, { useContext } from 'react'
import { Goal, CircleChevronDown, CalendarDays, CheckCircle2, Trash2} from 'lucide-react'
import { TaskProvider } from '../../utils/TasksContext'

const TaskNames = () => {
  const {isDark} = useContext(TaskProvider)
  return (
    <div className='w-[100%] grid grid-cols-5  scrollbar-none overflow-x-auto  gap-4 h-8 mb-4 responsive7 pl-16'>
      {/* Goal Name */}
      <div className={`flex transition all ease-in-out  duration-500 ${isDark ? "text-white" : ""} items-end gap-2`}>
        <Goal className='mb-[3px] shrink-0' size={20} />
        <p className="text-sm shrink-0 font-medium mb-1 responsive8">Goal Name</p>
      </div>
      
      {/* Priority */}
      <div className={`flex transition all ease-in-out duration-500 ${isDark ? "text-white" : ""} ml-22 responsive9 items-end gap-2`}>
        <CircleChevronDown className='mb-[3px] shrink-0 ' size={20} />
        <p className="text-sm font-medium mb-1 shrink-0 responsive8">Priority</p>
      </div>
      
      {/* Due Date */}
      <div className={`flex transition all ease-in-out duration-500 ${isDark ? "text-white" : ""} ml-22 responsive9 items-end gap-2`}>
        <CalendarDays className='mb-[3px] shrink-0' size={20} />
        <p className="text-sm font-medium mb-1 shrink-0 responsive8">Due Date</p>
      </div>
      
      {/* Status - Complete/Incomplete */}
      <div className={`flex transition all ease-in-out duration-500 ${isDark ? "text-white" : ""} ml-22 responsive10 w-50 items-end gap-2`}>
        <CheckCircle2 className='mb-[3px] text-green-500 shrink-0' size={20} />
        <p className="text-sm font-medium mb-1 shrink-0 responsive8">Comp/Incomp</p>
      </div>
      
      {/* Actions or Extra Column */}
      <div className={`flex transition all ease-in-out duration-500 ${isDark ? "text-white" : ""} ml-10 items-end gap-2`}>
        <Trash2 className='mb-[3px] shrink-0' size={20} />
        <p className="text-sm font-medium mb-1 shrink-0 responsive8">Delete</p>
      </div>
    </div>
  )
}

export default TaskNames