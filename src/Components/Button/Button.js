import styles from "./Button.module.css";

export default function Button({ text, onClick, style }) {
  return (
    <button style={style} className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
