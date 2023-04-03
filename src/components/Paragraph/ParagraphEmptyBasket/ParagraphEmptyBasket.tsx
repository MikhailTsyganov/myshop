import { FC } from "react";
import { ParagraphEmptyBasketProps } from ".";
import { StyledParagraphEmptyBasket } from "./ParagraphEmptyBasket.styles";

export const ParagraphEmptyBasket: FC<ParagraphEmptyBasketProps> = (props) => {
  return <StyledParagraphEmptyBasket {...props}></StyledParagraphEmptyBasket>;
};
