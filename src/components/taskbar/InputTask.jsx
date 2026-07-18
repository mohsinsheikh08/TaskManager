import Input from './Input'
import AddBtn from './AddBtn'
import { useContext } from 'react'
import { TaskProvider } from '../../utils/TasksContext'

const InputTask = () => {
  const {isDark} = useContext(TaskProvider)
  return (
    <div className={`w-full transition all ease-in-out duration-500 h-20 mt-4 rounded-lg ${isDark ? "bg-[#25254a] border-[#aa9ff6]": "bg-[#F4F2FD] border-[#ded9fe]"}   border-3 flex justify-between items-center`}>
     <Input />
     <AddBtn />
    </div>
  )
}

export default InputTask
