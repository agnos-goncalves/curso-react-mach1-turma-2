/* eslint-disable react/prop-types */
import "./TaskItem.css";

function TaskItem(props) {
  return (
    <div className="task-item">
      <h3>{props.title}</h3>
      <span onClick={() => props.onTaskComplete(props.title)}>
        {props.completed ? "completa" : "a fazer"}
      </span>
    </div>
  );
}

export default TaskItem;
