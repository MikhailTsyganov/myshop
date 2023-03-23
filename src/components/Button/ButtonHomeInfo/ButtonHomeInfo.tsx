import { FC } from "react";
import { ButtonHomeInfoProps } from ".";
import { StyledButtonHomeInfo } from "./ButtonHomeInfo.styles";

export const ButtonHomeInfo: FC<ButtonHomeInfoProps> = (props) => {
  return <StyledButtonHomeInfo>{props.children}</StyledButtonHomeInfo>;
};
