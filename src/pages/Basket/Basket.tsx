import { FC } from "react";
import { BasketProps } from ".";
import { StyledBasket } from "./Basket.styles";
import { EmptyBasket } from "./EmptyBasket";
import { FullBasket } from "./FullBasket";
import { useAppSelector } from "redux/hooks/hooks";
import { selectedGoods } from "redux/selectors/selectors";
import { Header, Main, Footer } from "containers";

export const Basket: FC<BasketProps> = (props) => {
  const selectedGoodsArray = useAppSelector(selectedGoods);

  return (
    <>
      <Header view="basket" />
      <Main view="basket">
        <StyledBasket {...props}>
          {selectedGoodsArray.length === 0 && <EmptyBasket />}
          {selectedGoodsArray.length > 0 && (
            <FullBasket selectedGoods={selectedGoodsArray} />
          )}
        </StyledBasket>
      </Main>
      <Footer view="basket" />
    </>
  );
};
