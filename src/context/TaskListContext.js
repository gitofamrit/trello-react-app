import React, { createContext, useState, useEffect } from "react";
import * as uuid from "uuid/v1";
export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  const addTask = title => {
    setTasks([...tasks, { title, id: uuid() }]);
  };
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const clearList = () => {
    setTasks([]);
  };
  const findItem = id => {
    const item = tasks.find(task => task.id === id);
    setEditItem(item);
  };
  const editTask = (title, id) => {
    const updatededTaskList = tasks.map(task =>
      task.id === id ? { title, id } : task
    );
    setTasks(updatededTaskList);
    setEditItem(null);
  };
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editItem,
        editTask
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};
export default TaskListContextProvider;
