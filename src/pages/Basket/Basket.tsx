import { FC } from "react";
import { BasketProps } from ".";
import { StyledBasket } from "./Basket.styles";
import { EmptyBasket } from "./EmptyBasket";
import { FullBasket } from "./FullBasket";

import { Header, Main, Footer } from "containers";

export const Basket: FC<BasketProps> = (props) => {
  return (
    <>
      <Header view="basket" />
      <Main view="basket">
        <StyledBasket {...props}>
          {/* <EmptyBasket /> */}
          <FullBasket />
        </StyledBasket>
      </Main>
      <Footer view="basket" />
    </>
  );
};
