import { useState, useEffect } from "react";
import { getStorage, setStorage } from "../../helpers/localStorage";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Task from "../Task/Task";
import styles from "./Todo.module.css";

export default function Todo() {
  const currUser = getStorage("user")[0].user;
  const initialTasks = getStorage(currUser) ? getStorage(currUser) : [];
  const [tasks, setTasks] = useState(initialTasks);
  const [task, setTask] = useState("");

  useEffect(() => {
    setStorage(currUser, tasks);
  }, [tasks]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (task) {
      setTasks([
        ...tasks,
        {
          title: task,
          id: Date.now(),
          isComplete: false,
        },
      ]);
    }
    setTask("");
  };

  const handleDelete = (id) => {
    console.log(id);
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };
  //   console.log(tasks);
  const doneCount = tasks.filter((task) => task.isComplete).length;
  return (
    <div className={styles.todo}>
      <h2>{currUser} THINGS TO DO</h2>
      <hr />
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <Task
              isComplete={task.isComplete}
              task={task.title}
              onClick={() => handleDelete(task.id)}
              onChange={() => handleComplete(task.id)}
            />
          </div>
        ))}
      </div>
      <hr />
      <div>
        <h2>Done {doneCount}</h2>
        <Input onChange={handleTask} value={task} />
        <Button text="Add" onClick={handleClick} />
      </div>
    </div>
  );
}
