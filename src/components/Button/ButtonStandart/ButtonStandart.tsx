import { FC } from "react";
import { ButtonStandartProps } from ".";
import { StyledButtonStandart } from "./ButtonStandart.styles";

export const ButtonStandart: FC<ButtonStandartProps> = (props) => {
  return (
    <StyledButtonStandart {...props} type={props.type}>
      {props.children}
    </StyledButtonStandart>
  );
};
