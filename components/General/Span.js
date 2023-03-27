import styles from "./General.module.css";

export default function Span({ content, style }) {
  return (
    <span style={style} className={styles.Span}>
      {content}
    </span>
  );
}
