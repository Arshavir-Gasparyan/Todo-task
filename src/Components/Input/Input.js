import styles from "./Input.module.css";
export default function Input({ onChange, type, value }) {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      type={type}
      value={value}
    ></input>
  );
}
