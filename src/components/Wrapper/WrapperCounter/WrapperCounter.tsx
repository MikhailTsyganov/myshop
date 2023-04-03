import { FC } from "react";
import { WrapperCounterProps } from ".";
import { StyledWrapperCounter } from "./WrapperCounter.styles";

export const WrapperCounter: FC<WrapperCounterProps> = (props) => {
  return <StyledWrapperCounter {...props}></StyledWrapperCounter>;
};
