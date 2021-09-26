import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Todo.module.css";

export default function Todo() {
  return (
    <div className={styles.todo}>
      <h2>THINGS TO DO</h2>
      <hr />
      <div></div>
      <div>
        <h2>Done</h2>
        <Input />
        <Button text="Add" />
      </div>
    </div>
  );
}
