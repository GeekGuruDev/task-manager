import Button from "./Button";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onClear }) => {
  return (
    <section className="task-container">
      {tasks.length === 0 && <p>You do not have any task.</p>}
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} />
        ))}
      </ul>
      {tasks.length !== 0 && (
        <Button className="btn-clear" onClick={onClear}>
          Clear
        </Button>
      )}
    </section>
  );
};

export default TaskList;
