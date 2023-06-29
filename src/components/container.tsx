import { ReactNode } from "react";
import Devider from "./devider";

type ContainerProp = {
  children: ReactNode;
  size?: "md" | "sm";
};

const Container = ({ children, size = "md" }: ContainerProp) => {
  return <div className={`container container--${size}`}>
    <Devider/>
    {children}
    <Devider/>
    </div>;
};

export default Container;
