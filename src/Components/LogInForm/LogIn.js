import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./LogIn.module.css";

export default function LogIn() {
  return (
    <div className={styles.logIn}>
      <h1>Log In</h1>
      <form>
        <Input />
        <Input />
        <Button />
      </form>
    </div>
  );
}
