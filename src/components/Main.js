import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const getStorageTasks = () => {
  let tasks = localStorage.getItem("tasks");
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
};

const Main = () => {
  const [tasks, setTasks] = useState(getStorageTasks());
  const [alert, setAlert] = useState({ msg: "", type: "" });

  const addHandler = (taskName) => {
    if (!taskName) {
      return setAlert({
        msg: "Error: Please Enter Valid Input",
        type: "alert-red",
      });
    }
    setTasks((preTasks) => {
      const newTasks = [
        ...preTasks,
        { id: Math.random(), name: taskName, completed: false },
      ];
      return newTasks;
    });
    setAlert({ msg: "Task Added Successfully", type: "alert-green" });
  };

  const deleteHandler = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    setAlert({ msg: "Task Deleted Successfully", type: "alert-green" });
  };

  const clearHandler = () => {
    setTasks([]);
    setAlert({
      msg: "All Tasks Cleared Successfully",
      type: "alert-green",
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({ msg: "", type: "" });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  return (
    <main className="main">
      <TaskForm onAdd={addHandler} alert={alert} />
      <TaskList tasks={tasks} onDelete={deleteHandler} onClear={clearHandler} />
    </main>
  );
};

export default Main;
