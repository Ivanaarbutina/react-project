import { ReactNode } from "react";

type InputProps = {
  disabled?: boolean;
  placeholder?: string;
  icon?: ReactNode;
  size?: "lg" | "md" | "sm";
  value: string;
  onChange: (value: string) => void;
};

const Input = ({
  disabled = false,
  placeholder = "",
  icon,
  size = "md",
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="input__wrapper">
      <input
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        className={`input ${icon && "input--has-icon"} input--${size} `}
        type="text"
      />
      <div className="input__icon">{icon}</div>
    </div>
  );
};

export default Input;
