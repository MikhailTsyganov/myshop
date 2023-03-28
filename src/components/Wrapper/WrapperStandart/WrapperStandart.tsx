import { FC } from "react";
import { WrapperStandartProps } from ".";
import { StyledWrapperStandart } from "./WrapperStandart.styles";

export const WrapperStandart: FC<WrapperStandartProps> = (props) => {
  return (
    <StyledWrapperStandart {...props}>{props.children}</StyledWrapperStandart>
  );
};
