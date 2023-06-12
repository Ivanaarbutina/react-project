import { ReactNode } from "react";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "lg" | "md" | "sm";
};

const Input = ({ placeholder = "", icon, size }: InputProps) => {
  return (
    <div className="input__wrapper">
      <input
        placeholder={placeholder}
        className={`input ${icon && "input--has-icon"} input input--${size}`}
        type="text"
      />
      <div className="input__icon">{icon}</div>
    </div>
  );
};

export default Input;
