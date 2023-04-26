import { ListItemFooterPrimary, Title2, Container } from "components";
import { FC, useState } from "react";
import { FooterProps } from ".";

import {
  StyledFooter,
  WrapperFooter,
  WrapperFooterItems,
} from "./Footer.styles";

const footerArray = [
  {
    title: "Покупателям",
    list: [
      { id: 1, name: "Как сделать заказ" },
      { id: 2, name: "Способы оплаты" },
      { id: 3, name: "Доставка" },
      { id: 4, name: "Возврат товара" },
      { id: 5, name: "Возврат денежных средств" },
      { id: 6, name: "Правила продажи" },
      { id: 7, name: "Правила пользования торговой площадкой" },
      { id: 8, name: "Вопросы и ответы" },
    ],
  },
  {
    title: "Партнерам",
    list: [
      { id: 1, name: "Продавайте на Wildberries" },
      { id: 2, name: "Курьерам" },
      { id: 3, name: "Перевозчикам" },
      { id: 4, name: "Партнерский пункт выдачи" },
      { id: 5, name: "Франшизный пункт выдачи" },
    ],
  },
  {
    title: "Наши проекты",
    list: [
      { id: 1, name: "WB Guru" },
      { id: 2, name: "Трудоустройство" },
      { id: 3, name: "Цифровые товары" },
    ],
  },
  {
    title: "Компания",
    list: [
      { id: 1, name: "О нас" },
      { id: 2, name: "Реквизиты" },
      { id: 3, name: "Пресс-центр" },
      { id: 4, name: "Контакты" },
      { id: 5, name: "Bug Bounty" },
      { id: 6, name: "WB.Tech" },
    ],
  },
  {
    title: "Мы в соцсетях",
    list: [
      { id: 1, name: "ВКонтакте" },
      { id: 2, name: "Одноклассники" },
      { id: 3, name: "YouTube" },
      { id: 4, name: "Телеграм" },
    ],
  },
  {
    title: "Приложение",
    list: [],
  },
];

export const Footer: FC<FooterProps> = (props) => {
  return (
    <StyledFooter {...props}>
      <Container>
        <WrapperFooter>
          <ListItemFooterPrimary item={footerArray[0]} />
          <WrapperFooterItems>
            <ListItemFooterPrimary item={footerArray[1]} />
            <ListItemFooterPrimary item={footerArray[2]} marginTop />
          </WrapperFooterItems>
          <ListItemFooterPrimary item={footerArray[3]} narrow />
          <ListItemFooterPrimary item={footerArray[4]} narrow />
          <ListItemFooterPrimary item={footerArray[5]} app />
        </WrapperFooter>
      </Container>
    </StyledFooter>
  );
};
