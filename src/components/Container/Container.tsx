import { FC } from "react";
import { ContainerProps } from ".";
import { StyledContainer } from "./Container.styles";

export const Container: FC<ContainerProps> = (props) => {
  const { children } = props;
  return <StyledContainer {...props}>{children}</StyledContainer>;
};
