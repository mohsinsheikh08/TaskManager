import React, { useContext } from "react";
import AllTask from "./AllTask";
import ActiveTask from "./ActiveTask";
import Completed from "./Completed";
import TaskNumber from "./TaskNumber";

const FilterTasks = () => {
  return (
    <div className="h-11 rounded-md flex justify-between items-center  pl-2 pr-2 py-2 my-2">
      <div className="flex justify-between  text-white  w-100 items-center ">
        <AllTask />
        <ActiveTask />
        <Completed />
      </div>
      <div className="flex justify-between  text-white  w-25 items-center">
        <TaskNumber />
      </div>
    </div>
  );
};

export default FilterTasks;
