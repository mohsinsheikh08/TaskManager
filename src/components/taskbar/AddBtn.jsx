import React, { useCallback, useContext } from "react";
import { TaskProvider } from "../../utils/TasksContext";

const AddBtn = () => {
  const { taskValue, setTaskValue, createTasks, setCreateTasks, isDark} = useContext(TaskProvider);
  
  return (
    <div className="w-50 h-full flex justify-center items-center">
      <button
      
        onClick={() => {
          
          if (taskValue.trim() === "") {
            alert("Please Write Something in the TaskBar");
            return;
          }
          const newTasks = {
            id : Date.now(),
            task : taskValue,
            isComplete : false,
            priority : 'medium',
            dueDate : ''
          }
          setTaskValue("");
          setCreateTasks([...createTasks, newTasks])

        }}
        className={`px-6 py-3 ${isDark ? "bg-[#aa9ff6] text-white" : "bg-[#6F64E3] text-white "}  rounded-md font-medium text-md`}
      >
        Add Tasks
      </button>
    </div>
  );
};

export default AddBtn;
