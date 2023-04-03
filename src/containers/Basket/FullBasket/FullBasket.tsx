import { ButtonBasketFullDeliveryAddress, Title1, Title2 } from "components";
import { WrapperBasketFull } from "components/Wrapper/WrapperBasket/WrapperBasketFull";
import { FC, useState } from "react";
import { FullBasketProps } from ".";
import { StyledFullBasket } from "./FullBasket.styles";
import { WrapperBasketFullFlex } from "components";

import testImg from "../../../assets/images/shampoo.jpg";
import { ListBasketFull } from "components/List/ListBasketFull";
import { ButtonStandart } from "components/Button/ButtonStandart";
import { ButtonBasketFullOrder } from "components/Button/ButtonBasketFull/ButtonBasketFullOrder";
import { ParagraphFullBasket } from "components/Paragraph/ParagraphFullBasket";
import { WrapperStandart } from "components/Wrapper/WrapperStandart";
const selectedGoods = [
  {
    id: 1,
    name: "BASE Professional / 🎁 🔥 Шампунь для волос профессиональный, 1 л",
    price: 370,
    img: testImg,
    color: ["white", "green"],
    country: "China",
    quantity: 11,
  },
  {
    id: 2,
    name: "BASE Professional / 🎁 🔥 Шампунь для волос профессиональный, 1 л",
    price: 370,
    img: testImg,
    color: ["white", "green"],
    country: "China",
    quantity: 11,
  },
];

export const FullBasket: FC<FullBasketProps> = (props) => {
  const [total, setTotal] = useState(0);

  return (
    <StyledFullBasket {...props}>
      <WrapperStandart>
        <WrapperBasketFull>
          <Title1>Корзина</Title1>
          <ListBasketFull array={selectedGoods} />
        </WrapperBasketFull>
        <WrapperBasketFull>
          <Title2>Способ доставки</Title2>
          <ParagraphFullBasket>
            <a href="">Выбрать адрес доставки</a>
          </ParagraphFullBasket>
        </WrapperBasketFull>
        <WrapperBasketFullFlex>
          <WrapperBasketFull>
            <Title2>Способ оплаты</Title2>
            <ParagraphFullBasket>
              <a href="">Войти или зарегистрироваться, </a>
              чтобы выбрать способ оплаты
            </ParagraphFullBasket>
          </WrapperBasketFull>
          <WrapperBasketFull>
            <Title2>Мои данные</Title2>
            <ParagraphFullBasket>
              <a href="">Войти или зарегистрироваться, </a>
              чтобы оформить заказ
            </ParagraphFullBasket>
          </WrapperBasketFull>
        </WrapperBasketFullFlex>
      </WrapperStandart>
      <WrapperBasketFull className="WrapperBasketFullTotal">
        <ButtonBasketFullDeliveryAddress>
          Выбрать адрес доставки
        </ButtonBasketFullDeliveryAddress>
        <ParagraphFullBasket small grey>
          Товары n шт.
        </ParagraphFullBasket>
        <WrapperStandart display="flex" justify="space-between">
          <ParagraphFullBasket big>Итого</ParagraphFullBasket>
          <ParagraphFullBasket big>{total}</ParagraphFullBasket>
        </WrapperStandart>
        <ButtonBasketFullOrder primary>Заказать</ButtonBasketFullOrder>
      </WrapperBasketFull>
    </StyledFullBasket>
  );
};
