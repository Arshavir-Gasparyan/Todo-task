import Button from "../Button/Button";
import styles from "./Task.module.css";
export default function Task({ isComplete, task, onClick, onChange }) {
  return (
    <div className={styles.task}>
      <label className={isComplete ? styles.completed : styles.label}>
        <input
          className={styles.input}
          checked={isComplete}
          onChange={onChange}
          type="checkbox"
        ></input>
        {task}
      </label>
      <Button text="X" onClick={onClick} />
    </div>
  );
}
