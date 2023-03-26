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
      />
    </label>
  );
}
