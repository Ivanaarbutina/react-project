type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
  size?: "sm" | "md" | "lg";
}

const Button = ( { text, color = "green",size  }: ButtonProps) => {
  return <button className={`btn btn--${color} btn--${size}`}>{text}</button>; 
};

export default Button;