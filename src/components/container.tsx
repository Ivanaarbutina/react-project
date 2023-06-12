import { ReactNode } from "react";

type ContainerProp = {
  children: ReactNode;
  size?: "md" | "sm";
};

const Container = ({ children }: ContainerProp) => {
  return <div className="container">{children}</div>;
};

export default Container;
