import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";

const TaskItem = ({ task, onDelete, onComplete }) => {
  const { completed } = task;
  return (
    <li className="task-item">
      <button
        className={`check-btn ${completed && "checked"}`}
        onClick={() => {
          onComplete(task.id);
        }}
      >
        <AiOutlineCheckCircle />
      </button>
      <h3 className={completed && "completed"}>{task.name}</h3>
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
