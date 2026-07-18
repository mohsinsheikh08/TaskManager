import React, { useContext, useEffect, useState } from "react";
import { TaskProvider } from "../../utils/TasksContext";

const Input = () => {
  const { taskValue, setTaskValue, createTasks, setCreateTasks, isDark } =
    useContext(TaskProvider);

  return (
    <div className=" w-full h-full flex  rounded-md items-center ml-6 ">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (taskValue.trim() === "") {
              alert("Please Write Something in the TaskBar");
              return;
            }
            const newTasks = {
              id: Date.now(),
              task: taskValue,
            };

            setCreateTasks([...createTasks, newTasks]);
            setTaskValue("");
          }
        }}
        onChange={(e) => {
          setTaskValue(e.target.value);
        }}
        className={`text-lg w-[93%] ${isDark ? "bg-white/90 " : "bg-white/80 "} outline-none rounded-md h-[60%]  flex justify-center placeholder:text-[#2d5c68] items-center pl-5`}
        type="text"
        value={taskValue || ""}
        placeholder="What you want to do?"
      />
    </div>
  );
};

export default Input;
