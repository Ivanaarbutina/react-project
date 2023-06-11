type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
};

const Input = ({rounded, label, validation}: InputProps) => {
  return (
    <div>
   {label ? <label htmlFor={label}>{label}</label> : ""} <br></br>
      <input
        id={label}
        className={`input ${rounded ? "input--rounded" : ""}`}
        type="text"
      />
      {validation ? <p className="input__validation">{validation}</p> : ""}
    </div>
  );
};

export default Input;