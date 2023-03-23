import { FC } from "react";
import { WrapperProps } from ".";
import { StyledWrapper } from "./Wrapper.styles";

export const Wrapper: FC<WrapperProps> = (props) => {
  return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
};
