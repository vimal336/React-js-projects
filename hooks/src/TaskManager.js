import React, { useState } from "react";
import "./css/TaskManager.css"

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState("");

  // Handle input change for adding a new task
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Handle input change for editing a task
  const handleEditInputChange = (e) => {
    setEditTaskValue(e.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask }]);
      setNewTask("");
    }
  };

  // Edit an existing task
  const saveEditTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: editTaskValue } : task
      )
    );
    setEditTaskId(null);
    setEditTaskValue("");
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Start editing a task
  const editTask = (id, name) => {
    setEditTaskId(id);
    setEditTaskValue(name);
  };

  return (
    <div className="Task-container">
      <h1 className="task-header">Task Manager</h1>

      {/* Input for adding a new task */}
      <input
        type="text"
        value={}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul className="task-ul">
        {tasks.map((task) => (
          <li className="task-li" key={task.id}>
            {/* Display or edit the task */}
            {editTaskId === task.id ? (
              <input
                type="text"
                value={editTaskValue}
                onChange={handleEditInputChange}
              />
            ) : (
              <span>{task.name}</span>
            )}

            {/* Buttons for editing and deleting */}
            {editTaskId === task.id ? (
              <button onClick={() => saveEditTask(task.id)}>Save</button>
            ) : (
              <button onClick={() => editTask(task.id, task.name)}>Edit</button>
            )}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
