import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskListContextProvider from "../context/TaskListContext";
import "../App.css";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="header">
            <h1>Task Manager</h1>
          </div>
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
