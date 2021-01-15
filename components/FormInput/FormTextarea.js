import styles from "./FormInput.module.css";

const FormTextarea = ({
  placeholder = "Input Text...",
  value,
  setValue,
  style = "default",
  required = false
}) => {
  return (
    <textarea
      className={styles[style]}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      required={required}
    ></textarea>
  );
};

export default FormTextarea;
