import { FC } from "react";
import { EmptyBasketProps } from ".";
import { StyledEmptyBasket } from "./EmptyBasket.styles";
import { ParagraphEmptyBasket } from "components/Paragraph/ParagraphEmptyBasket";
import { Title1, ButtonEmptyBasket, WrapperBasketEmpty } from "components";

export const EmptyBasket: FC<EmptyBasketProps> = (props) => {
  return (
    <StyledEmptyBasket {...props}>
      <WrapperBasketEmpty>
        <Title1>В корзине пока пусто</Title1>
        <ParagraphEmptyBasket grey>
          Загляните на главную, чтобы выбрать товары или найдите нужное в поиске
        </ParagraphEmptyBasket>
        <ButtonEmptyBasket primary>Перейти на главную</ButtonEmptyBasket>
      </WrapperBasketEmpty>
    </StyledEmptyBasket>
  );
};
