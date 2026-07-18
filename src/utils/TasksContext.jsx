import React, { createContext, useEffect, useState } from "react";
export const TaskProvider = createContext();

const TasksContext = ({ children }) => {
    const [isDark, setiIsDark] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const [createTasks, setCreateTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
   if(savedTasks){
    const task = JSON.parse(savedTasks);
    return task.map(task => ({
      ...task,
      isComplete : task.isComplete || false,
      priority : task.priority || 'medium',
      dueDate : task.dueDate || ''
    }))
   }
    return [];
  });
  const [TaskFilter, setTaskFilter] = useState("all");

  const deleteTask = (id) => {
    if (!id) {
      console.warn("No id provided for delete");
      return;
    }
    if (!Array.isArray(createTasks)) return;
    setCreateTasks(createTasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newTasks, newCompleteStatus, newPriority, newDate) => {
    if (!Array.isArray(createTasks)) {
      console.error("❌ createTasks is not an array!");
      return;
    }
    setCreateTasks(
      createTasks.map((task) => {
        return task.id === id
          ? { ...task, task: newTasks, isComplete: newCompleteStatus || false, priority : newPriority || task.priority || 'medium', dueDate : newDate !== undefined ? newDate : task.dueDate || ''  }
          : task;
      })
    );
  };
  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(createTasks))
  }, [createTasks])
  useEffect(() => {
    if (createTasks && !Array.isArray(createTasks)) {
      console.warn("⚠️ createTasks is not an array! Fixing...");
      
      let fixedTasks = [];
      if (typeof createTasks === 'object' && createTasks !== null) {
        const values = Object.values(createTasks);
        fixedTasks = values.filter(item => item && typeof item === 'object' && item.id);
      }
      
      console.log("✅ Fixed tasks:", fixedTasks);
      setCreateTasks(fixedTasks);
    }
  }, []);

  useEffect(() => {
    if (!Array.isArray(createTasks) || createTasks.length === 0) return;

    const hasMissingValue = createTasks.some(task => task.isComplete === undefined);
    
    if (hasMissingValue) {
      const updatedTasks = createTasks.map(task => ({
        ...task,
        isComplete: task.isComplete !== undefined ? task.isComplete : false
      }));
      setCreateTasks(updatedTasks); 
    }
  }, [createTasks.length]);

  return (
    <TaskProvider.Provider
      value={{
        taskValue,
        setTaskValue,
        createTasks,
        setCreateTasks,
        deleteTask,
        updateTask,
        TaskFilter,
        setTaskFilter,
        isDark,
        setiIsDark
      }}
    >
      {children}
    </TaskProvider.Provider>
  );
};

export default TasksContext;