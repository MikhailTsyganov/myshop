import { FC } from "react";
import { BackdropProps } from ".";
import { StyledBackdrop } from "./Backdrop.styles";

export const Backdrop: FC<BackdropProps> = (props) => {
  return <StyledBackdrop {...props}>{props.children}</StyledBackdrop>;
};
