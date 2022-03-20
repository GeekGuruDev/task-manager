import { AiFillDelete } from "react-icons/ai";

const TaskItem = ({ task, onDelete }) => {
  return (
    <li className="task-item">
      <h3>{task.name}</h3>
      <button
        className="task-btn"
        onClick={() => {
          onDelete(task.id);
        }}
      >
        <AiFillDelete />
      </button>
    </li>
  );
};

export default TaskItem;
