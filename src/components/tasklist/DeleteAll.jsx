import React, { useContext } from "react";
import { TaskProvider } from "../../utils/TasksContext";

const DeleteAll = () => {
  const { createTasks, setCreateTasks, isDark } = useContext(TaskProvider);
  return (
    <div className="w-full h-10 flex justify-end items-center">
      <button
        onClick={() => {
            if(createTasks.length === 0 ){
                alert("TaskList is already empty!")
                return;
            }else{
                if(window.confirm("Are you sure you want to delete all tasks?")){
                    setCreateTasks([])
                }
            }
        }}
        className={`transition all ease-in-out duration-500 ${isDark ? "border-[#aa9ff6] border-2 bg-[#aa9ff6]/40 text-[#efedfd]" : "bg-[#FFF9F8] border-2 border-[#FDD5D9] text-[#E62D33]"} rounded-lg w-50 h-full`}
      >
        Delete All Tasks
      </button>
    </div>
  );
};

export default DeleteAll;
