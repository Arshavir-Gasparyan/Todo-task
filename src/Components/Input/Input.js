import styles from "./Input.module.css";

export default function Input({ onChange, type, value, style }) {
  return (
    <input
      style={style}
      className={styles.input}
      onChange={onChange}
      type={type}
      value={value}
    ></input>
  );
}
