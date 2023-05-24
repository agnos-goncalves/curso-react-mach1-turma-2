/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import "./TaskList.css";
import TaskItem from "../TaskItem";
import { useState } from "react";

const data = [
  {
    title: "Criar aula de amanha",
    completed: true,
  },
  {
    title: "Deploy em prod",
    completed: false,
  },
  {
    title: "Fazer cafe hoje",
    completed: false,
  },
];

function TaskList() {
  const [tasks, setTasks] = useState(data);
  function handleTaskComplete(title) {
    tasks.map((task) => {
      if (title == task.title) {
        task.completed = true;
      }
    });
    setTasks([...tasks]);
  }
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          title={task.title}
          completed={task.completed}
          onTaskComplete={handleTaskComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
