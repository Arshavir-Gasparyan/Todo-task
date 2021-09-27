import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Task from "../Task/Task";
import styles from "./Todo.module.css";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  //   const generateId = () => {
  //     const id = Math.floor(Math.random() * 100);
  //     return id;
  //   };

  const handleTask = (e) => {
    setTask({
      text: e.target.value,
      //   id: generateId(),
    });
  };

  const handleClick = () => {
    setTasks([
      ...tasks,
      {
        title: task,
        id: Date.now(),
        isComplete: false,
      },
    ]);
    console.log(task.id);
  };

  const handleDelete = (id) => {
    console.log(id);
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className={styles.todo}>
      <h2>THINGS TO DO</h2>
      <hr />
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <Task task={task.title} onClick={() => handleDelete(task.id)} />
          </div>
        ))}
      </div>
      <div>
        <h2>Done</h2>
        <Input onChange={handleTask} value={task.text} />
        <Button text="Add" onClick={handleClick} />
      </div>
    </div>
  );
}
