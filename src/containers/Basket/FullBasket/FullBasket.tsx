import { ButtonBasketFullDeliveryAddress, Title1, Title2 } from "components";
import { WrapperBasketFull } from "components/Wrapper/WrapperBasket/WrapperBasketFull";
import { FC } from "react";
import { FullBasketProps } from ".";
import { StyledFullBasket } from "./FullBasket.styles";
import { WrapperBasketFullFlex } from "components";

import testImg from "../../../assets/images/shampoo.jpg";
import { ListItemBasketFull } from "components/List/ListItemBasketFull";
import { ButtonStandart } from "components/Button/ButtonStandart";
import { ButtonBasketFullOrder } from "components/Button/ButtonBasketFull/ButtonBasketFullOrder";
import { ParagraphFullBasket } from "components/Paragraph/ParagraphFullBasket";
import { WrapperStandart } from "components/Wrapper/WrapperStandart";
import { List } from "components/List/List";
const selectedGoods = [
  {
    id: 1,
    name: "BASE Professional / 🎁 🔥 Шампунь для волос профессиональный, 1 л",
    price: 370,
    img: testImg,
    color: ["white", "green"],
    location: "China",
    quantity: 11,
  },
  {
    id: 2,
    name: "BASE Professional / 🎁 🔥 Шампунь для волос профессиональный, 1 л",
    price: 370,
    img: testImg,
    color: ["white", "green"],
    location: "China",
    quantity: 11,
  },
];

export const FullBasket: FC<FullBasketProps> = (props) => {
  const requestHandler = () => {
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "myusername1",
        email: "myemail@example1.com",
        password: "mypasswor1d",
      }),
    })
      // fetch("http://localhost:3306/", {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },

      // })
      .then((response) => response.json())
      .then((data) => {
        // сохраняем полученный токен в localStorage или в cookies
        // localStorage.setItem("token", data.token);
        console.log("register", data);
      });
  };

  return (
    <StyledFullBasket {...props}>
      <WrapperStandart>
        <WrapperBasketFull>
          <Title1>Корзина</Title1>
          <List Component={ListItemBasketFull} array={selectedGoods} />
        </WrapperBasketFull>
        <WrapperBasketFull className="WrapperBasketFullAddress">
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
          <ParagraphFullBasket big>Типа 0</ParagraphFullBasket>
        </WrapperStandart>
        <ButtonBasketFullOrder primary onClick={requestHandler}>
          Заказать
        </ButtonBasketFullOrder>
      </WrapperBasketFull>
    </StyledFullBasket>
  );
};
