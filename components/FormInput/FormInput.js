import styles from "./FormInput.module.css";

const FormInput = ({
  placeholder = "Input Text...",
  type,
  value,
  setValue,
  style = "default",
  required = false
}) => {
  return (
    <input
      className={styles[style]}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      required={required}
    ></input>
  );
};

export default FormInput;
