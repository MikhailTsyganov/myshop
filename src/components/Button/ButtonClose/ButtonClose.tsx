import { FC } from "react";
import { ButtonCloseProps } from ".";
import { StyledButtonClose } from "./ButtonClose.styles";

export const ButtonClose: FC<ButtonCloseProps> = ({ onCloseSidebar }) => {
  return <StyledButtonClose onClick={onCloseSidebar}></StyledButtonClose>;
};
