import React, { useContext, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { TaskProvider } from "../../utils/TasksContext";
const Btn = () => {
  const { isDark, setiIsDark } = useContext(TaskProvider);
  return (
    <div>
      <button
        onClick={() => {
          {
            isDark === false ? setiIsDark(true) : setiIsDark(false);
          }
          console.log(isDark);
        }}
        className="w-12 h-12 bg-white flex justify-center items-center rounded-full"
      >
        {isDark ? (
          <Moon size={31} className="text-[#506786]" />
        ) : (
          <Sun size={31} className="text-[#FEAA24]" />
        )}
      </button>
    </div>
  );
};

export default Btn;
