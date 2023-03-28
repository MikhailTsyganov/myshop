import { FC } from "react";
import { WrapperProps } from "./Wrapper.props";
import { StyledWrapper } from "./Wrapper.styles";

export const Wrapper: FC<WrapperProps> = (props) => {
  return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
};
