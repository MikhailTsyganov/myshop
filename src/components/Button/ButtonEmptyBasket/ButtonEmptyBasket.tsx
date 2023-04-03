import { FC } from "react";
import { ButtonStandartProps } from "../ButtonStandart";
import { StyledButtonEmptyBasket } from "./ButtonEmptyBasket.styles";

export const ButtonEmptyBasket: FC<ButtonStandartProps> = (props) => {
  return <StyledButtonEmptyBasket {...props}></StyledButtonEmptyBasket>;
};
