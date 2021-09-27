import Button from "../Button/Button";
import styles from "./Task.module.css";
export default function Task({ task, onClick }) {
  return (
    <div className={styles.task}>
      <p>y</p>
      <p>{task.text}</p>
      <Button text="X" onClick={onClick} />
    </div>
  );
}
