import React, { useRef, useContext, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = props => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );
  useEffect(() => {
    if (editItem !== null) {
      taskTitle.current.value = editItem.title;
    } else {
      taskTitle.current.value = "";
    }
  }, [editItem]);
  const taskTitle = useRef(null);
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        // console.log(taskTitle.current.value);
        if (editItem) {
          editTask(taskTitle.current.value.trim(), editItem.id);
        } else {
          addTask(taskTitle.current.value.trim());
          taskTitle.current.value = "";
        }
      }}
      className="form"
    >
      <input
        type="text"
        className="task-input"
        placeholder="Enter Task"
        required
        ref={taskTitle}
      />
      <div>
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Update" : "Add"}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
