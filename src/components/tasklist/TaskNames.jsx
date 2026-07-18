import React, { useContext } from 'react'
import { Goal, CircleChevronDown, CalendarDays, CheckCircle2, Trash2} from 'lucide-react'
import { TaskProvider } from '../../utils/TasksContext'

const TaskNames = () => {
  const {isDark} = useContext(TaskProvider)
  return (
    <div className='w-[100%] grid grid-cols-5 gap-4 h-8 mb-4 pl-16'>
      {/* Goal Name */}
      <div className={`flex transition all ease-in-out duration-500 ${isDark ? "text-white" : ""} items-end gap-2`}>
        <Goal className='mb-[3px]' size={20} />
        <p className="text-sm font-medium mb-1">Goal Name</p>
      </div>
      
      {/* Priority */}
      <div className={`flex transition all ease-in-out duration-500 ${isDark ? "text-white" : ""} ml-22 items-end gap-2`}>
        <CircleChevronDown className='mb-[3px]' size={20} />
        <p className="text-sm font-medium mb-1">Priority</p>
      </div>
      
      {/* Due Date */}
      <div className={`flex transition all ease-in-out duration-500 ${isDark ? "text-white" : ""} ml-22 items-end gap-2`}>
        <CalendarDays className='mb-[3px]' size={20} />
        <p className="text-sm font-medium mb-1">Due Date</p>
      </div>
      
      {/* Status - Complete/Incomplete */}
      <div className={`flex transition all ease-in-out duration-500 ${isDark ? "text-white" : ""} ml-22 w-50 items-end gap-2`}>
        <CheckCircle2 className='mb-[3px] text-green-500' size={20} />
        <p className="text-sm font-medium mb-1">Comp/Incomp</p>
      </div>
      
      {/* Actions or Extra Column */}
      <div className={`flex transition all ease-in-out duration-500 ${isDark ? "text-white" : ""} ml-10 items-end gap-2`}>
        <Trash2 className='mb-[3px] ' size={20} />
        <p className="text-sm font-medium mb-1">Delete</p>
      </div>
    </div>
  )
}

export default TaskNames