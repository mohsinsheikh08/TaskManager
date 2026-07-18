import React, { useContext } from "react";
import { LayoutList } from "lucide-react";
import { TaskProvider } from "../../utils/TasksContext";
const Hading = () => {
  const { isDark } = useContext(TaskProvider);
  return (
    <div>
      <h1
        className={`text-4xl transition all ease-in-out duration-500 ${isDark ? "text-[#e0e0ff]" : "text-[#6C64E2]"}  font-medium tracking-wider flex items-center`}
      >
        Task Manager
        <LayoutList
          size={45}
          className={`ml-4 transition all ease-in-out duration-500  ${isDark === false ? "text-[#6C64E2]" : "text-[#e0e0ff]"}`}
        />
      </h1>
    </div>
  );
};

export default Hading;
