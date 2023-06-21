import { FC } from "react";
import { EmptyBasketProps } from ".";
import { StyledEmptyBasket } from "./EmptyBasket.styles";
import { ParagraphEmptyBasket } from "components/Paragraph/ParagraphEmptyBasket";
import { Title1, ButtonEmptyBasket, WrapperBasketEmpty } from "components";
import { useNavigate } from "react-router-dom";

export const EmptyBasket: FC<EmptyBasketProps> = (props) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/");
  };

  return (
    <StyledEmptyBasket {...props}>
      <WrapperBasketEmpty>
        <Title1>В корзине пока пусто</Title1>
        <ParagraphEmptyBasket grey>
          Загляните на главную, чтобы выбрать товары или найдите нужное в поиске
        </ParagraphEmptyBasket>
        <ButtonEmptyBasket primary onClick={onButtonClick}>
          Перейти на главную
        </ButtonEmptyBasket>
      </WrapperBasketEmpty>
    </StyledEmptyBasket>
  );
};
