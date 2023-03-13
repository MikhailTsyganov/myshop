import { FC } from "react";
import { ContainerProps } from ".";

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div style={{ padding: "0 32px" }}>{children}</div>;
};
