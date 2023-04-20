import { useEffect, useRef } from "react";
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
  labelAfter,
}) {
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    let width;
    if (beforeRef.current) {
      width = beforeRef.current.clientWidth;
      let padding = 20 + width + "px";
      inputRef.current.style.paddingLeft = padding;
    }
    if (afterRef.current) {
      console.log(afterRef.current.clientWidth);
    }
  }, []);
  return (
    <label
      htmlFor={label}
      className={styles.Input}
      style={labelStyle}
      data-after={labelAfter}
    >
      {label}
      <input
        placeholder={placeholder}
        onChange={(e) => func(e.target)}
        type={type ? type : "text"}
        style={type == "file" ? { ...inputStyle, display: "none" } : inputStyle}
        id={label}
        name={name}
        value={value}
        ref={inputRef}
      />
      {type == "file" && <span className={styles.file}>{placeholder}</span>}
      {before && (
        <span className={styles.before} ref={beforeRef}>
          {before}
        </span>
      )}
      {after && <span className={styles.after} ref={afterRef}></span>}
    </label>
  );
}
