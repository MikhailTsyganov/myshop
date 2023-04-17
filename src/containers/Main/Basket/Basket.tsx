import { FC } from "react";
import { BasketProps } from ".";
import { StyledBasket } from "./Basket.styles";
import { EmptyBasket } from "./EmptyBasket";
import { FullBasket } from "./FullBasket";

export const Basket: FC<BasketProps> = (props) => {
  return (
    <StyledBasket {...props}>
      {/* <EmptyBasket /> */}
      <FullBasket />
    </StyledBasket>
  );
};
