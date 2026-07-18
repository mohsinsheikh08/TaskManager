import React, { useContext } from "react";
import { useState } from "react";
import { TaskProvider } from "../../utils/TasksContext";
import { Pencil, Check } from "lucide-react";
const Tasks = ({ elem }) => {
  const isCompleted = elem?.isComplete || false;
  const [isHover, setIsHover] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(elem?.task);
  const { deleteTask, updateTask, isDark  } = useContext(TaskProvider);

  const SaveHandler = () => {
    if (editValue.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    updateTask(elem.id, editValue, isCompleted, elem.priority, elem.dueDate);
    setIsEdit(false);
  };
  const CancelHandler = () => {
    setEditValue(elem.task);
    setIsEdit(false);
  };
  const ToggleComplete = () => {
    updateTask(elem.id, elem.task, !isCompleted, elem.priority, elem.dueDate);
  };
  return (
    <div className={`transition all ease-in-out duration-500 ${isDark ? "bg-[#333366]" : "bg-white"} rounded-xl`}>
      <div className={`w-full h-12  flex items-center  ounded-xl `}>
        <div className="w-[3.5%] h-full flex justify-center items-center border-r-1 border-gray-400">
          <input
            className="scale-150 accent-green-400  cursor-pointer"
            type="checkbox"
            checked={isCompleted}
            onChange={() => {
              ToggleComplete();
            }}
          />
        </div>
        <div
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          className="w-[25%] overflow-hidden whitespace-nowrap  h-full flex justify-start ml-5 items-center border-r-1 border-gray-400"
        >
          {isEdit === false ? (
            <h1
              className={`truncate transition all ease-in-out duration-500 w-68 ${isCompleted === false ? `` : (isDark ? "text-gray-500 line-through" : "text-gray-300 line-through")} ${!isCompleted ? (isDark ? "text-white" : "text-black") : ""} `}
            >
              {editValue}
            </h1>
          ) : (
            <input
              className={`truncate h-full transition all ease-in-out duration-500 ${isDark ? "text-white" : "text-black"}  w-65 outline-none  `}
              onKeyDown={(e) => {
                if (e.key === "Enter") SaveHandler();
                if (e.key === "Escape") CancelHandler();
              }}
              value={editValue}
              type="text"
              placeholder="Edit your Task"
              onChange={(e) => {
                setEditValue(e.target.value);
              }}
            />
          )}
          <button
            onClick={() => {
              isEdit === false ? setIsEdit(true) : setIsEdit(false);
            }}
            className=" transition all mr-6 cursor-pointer ease-in-out bg-[#6F64E3]/60 rounded-lg text-white  duration-1000"
          >
            {isHover === true ? (
              isEdit === false ? (
                <Pencil
                  size={30}
                  className="border-[#6F64E3] p-1 border-2 rounded-lg"
                />
              ) : (
                <Check
                  onClick={() => {
                    SaveHandler();
                  }}
                  size={30}
                  className="border-[#6F64E3] p-1 border-2 rounded-lg"
                />
              )
            ) : (
              ""
            )}
          </button>
        </div>
        <div className="w-[18%] h-full flex justify-start ml-5 items-center border-r-1 border-gray-400">
          <select
            className={`appearance-none transition all ease-in-out duration-500 w-full focus:outline-none ${isDark ? "text-white" : "text-black"}  rounded-lg  py-2 pr-8`}
            name="Choose Priority"
            id=""
            value={elem.priority || "medium"}
            onChange={(e) => {
              updateTask(elem.id, elem.task, isCompleted, e.target.value);
            }}
          >
            <option value="" hidden></option>
            <option value="high">🔴 High</option>
            <option value="medium">🟡 Medium</option>
            <option value="low">🟢 Low</option>
          </select>
        </div>
        <div className="w-[18%] h-full flex justify-start ml-5 items-center border-r-1 border-gray-400">
          <input value={elem.dueDate || ''} onChange={(e) => {updateTask(elem.id, elem.task, elem.isComplete, elem.priority, e.target.value)}} type="date" className={`transition all ease-in-out duration-500 ${isDark ? "text-white" : "text-black"} `} />
        </div>
        <div
          onClick={() => {
            {
              ToggleComplete();
            }
          }}
          className="w-[12%] h-full flex justify-start ml-5 items-center border-r-1 border-gray-400"
        >
          <button
            className={` flex items-center px-2 py-1 transition all ease-in-out duration-500 justify-start ${isCompleted ? (isDark ?"text-green-100 bg-green-700 "  : "bg-green-100 text-green-700") : (isDark ? "text-yellow-100 bg-yellow-700" : "bg-yellow-100 text-yellow-700") }`}
          >
            {isCompleted ? "Completed" : "Pending"}
          </button>
        </div>
        <div className="w-[12%] h-full flex justify-start ml-7 items-center  border-gray-400">
          
          <button
            onClick={() => {
              deleteTask(elem.id);
            }}
            className={` transition all ease-in-out duration-500 ${isDark ? "bg-red-800 text-red-400 " : "bg-red-500/50 text-red-600"} px-4 py-1 `}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
