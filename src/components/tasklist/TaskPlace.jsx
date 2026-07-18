import React, { useContext, useState } from "react";
import TaskNames from "./TaskNames";
import Tasks from "./Tasks";
import { TaskProvider } from "../../utils/TasksContext";

const TaskPlace = () => {
  const { createTasks, TaskFilter} = useContext(TaskProvider);

  const getFilteredTasks = () => {
    if (!Array.isArray(createTasks)) {
      console.error("❌ createTasks is NOT an array!", createTasks);
      return [];
    }

    if (TaskFilter === 'all') return createTasks;
    if (TaskFilter === 'active') {
      return createTasks.filter(task => task.isComplete === false);
    }
    if (TaskFilter === 'completed') {
      return createTasks.filter(task => task.isComplete === true);
    }
    return createTasks;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div>
      <TaskNames />
      <div className="flex flex-col gap-5 h-57 mb-2 overflow-auto scrollbar-none">
        {filteredTasks.map((elem) => (
          <div key={elem.id}>
            <Tasks elem={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TaskPlace;