import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const TaskForm = ({ onAdd, alert }) => {
  const [taskName, setTaskName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(taskName);
    setTaskName("");
  };

  const changeHandler = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <section className="form">
      <form onSubmit={submitHandler}>
        <div className="form-container">
          <input
            className="form-input"
            type="text"
            placeholder="e.g. Pay Bill"
            onChange={changeHandler}
            value={taskName}
          />
          <Button type="submit">Add</Button>
        </div>
      </form>
      <Alert type={alert.type}>{alert.msg}</Alert>
    </section>
  );
};

export default TaskForm;
