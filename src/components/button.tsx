import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  //na ovaj način s & možemo extendati naš postoječi tip s nekim drugim
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ( { text, color = "green",size, ...props  }: ButtonProps) => {
  return <button className={`btn btn--${color} btn--${size} `} {...props}>{text}</button>; 
};

export default Button;