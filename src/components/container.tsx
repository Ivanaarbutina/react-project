import { ReactNode } from "react";
import Devider from "./devider";

type ContainerProp = {
  children: ReactNode;
  size?: "md" | "sm";
};

const Container = ({ children }: ContainerProp) => {
  return <div className="container">
    <Devider/>
    {children}
    <Devider/>
    </div>;
};

export default Container;
