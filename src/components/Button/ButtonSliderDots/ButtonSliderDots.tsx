import { FC } from "react";
import { ButtonSliderDotsProps } from ".";
import { StyledButtonSliderDots } from "./ButtonSliderDots.styles";

export const ButtonSliderDots: FC<ButtonSliderDotsProps> = (props) => {
  return <StyledButtonSliderDots {...props}></StyledButtonSliderDots>;
};
