import styles from "./General.module.css";

export default function Input({
  type,
  labelStyle,
  inputStyle,
  func,
  label,
  placeholder,
  name,
  value,
  before,
  after,
}) {
  return (
    <label htmlFor={label} className={styles.Input} style={labelStyle}>
      {label}
      <input
        placeholder={placeholder}
        onChange={(e) => func(e.target)}
        type={type ? type : "text"}
        style={inputStyle}
        id={label}
        name={name}
        value={value}
        data-before={before}
        className={
          before
            ? styles.InputBefore
            : after
            ? styles.InputAfter
            : before && after
            ? styles.InputBeforeAfter
            : styles.InputNone
        }
      />
    </label>
  );
}
