import { ButtonHTMLAttributes } from "react";
import Add from "../assets/add";

type FloatingButtonType = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const FloatingButton = ({ ...props }: FloatingButtonType) => {
  return (
    <button className="btn--floating" {...props}>
      <Add />
    </button>
  );
};

export default FloatingButton;
