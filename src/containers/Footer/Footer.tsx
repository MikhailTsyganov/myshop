import {
  ListGoods,
  Title3,
  // Wrapper
} from "components";
import { FC } from "react";
import { FooterProps } from ".";
import { Container } from "components";

import { StyledFooter } from "./Footer.styles";

const arr1 = {
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
};
const arr2 = {
  title: "Партнерам",
  list: [
    { id: 1, name: "Продавайте на Wildberries" },
    { id: 2, name: "Курьерам" },
    { id: 3, name: "Перевозчикам" },
    { id: 4, name: "Партнерский пункт выдачи" },
    { id: 5, name: "Франшизный пункт выдачи" },
  ],
};
const arr3 = {
  title: "Наши проекты",
  list: [
    { id: 1, name: "WB Guru" },
    { id: 2, name: "Трудоустройство" },
    { id: 3, name: "Цифровые товары" },
  ],
};
const arr4 = {
  title: "Наши проекты",
  list: [
    { id: 1, name: "О нас" },
    { id: 2, name: "Реквизиты" },
    { id: 3, name: "Пресс-центр" },
    { id: 4, name: "Контакты" },
    { id: 5, name: "Bug Bounty" },
    { id: 6, name: "WB.Tech" },
  ],
};
const arr5 = {
  title: "Наши проекты",
  list: [
    { id: 1, name: "ВКонтакте" },
    { id: 2, name: "Одноклассники" },
    { id: 3, name: "YouTube" },
    { id: 4, name: "Телеграм" },
  ],
};

export const Footer: FC<FooterProps> = (props) => {
  return (
    <StyledFooter {...props}>
      <Container>
        {/* <Wrapper display="flex" align="start"> */}
        {/* <Wrapper margin="0 8px 0 0" width="calc(29% - 8px * 2)"> */}
        {/* <Title3 white margin="0 auto 12px">
              Покупателям
            </Title3> */}
        {/* <ListGoods type="footer" array={arr1}></ListGoods> */}
        {/* </Wrapper> */}
        {/* <Wrapper margin="0 8px 0" width="calc(29% - 8px * 2)"> */}
        {/* <Wrapper> */}
        {/* <Title3 white margin="0 auto 12px">
                Партнерам
              </Title3> */}
        {/* <ListGoods type="footer" array={arr2}></ListGoods> */}
        {/* </Wrapper> */}
        {/* <Wrapper margin="48px 0 0"> */}
        {/* <Title3 white margin="0 auto 12px">
                Наши проекты
              </Title3> */}

        {/* <ListGoods type="footer" array={arr3}></ListGoods> */}
        {/* </Wrapper> */}
        {/* </Wrapper> */}
        {/* <Wrapper margin="0 8px 0" width="calc(21% - 8px * 2)"> */}
        {/* <Title3 white margin="0 auto 12px">
              Компания
            </Title3> */}
        {/* <ListGoods type="footer" array={arr4}></ListGoods> */}
        {/* </Wrapper> */}
        {/* <Wrapper margin="0 8px 0" width="calc(21% - 8px * 2)"> */}
        {/* <Title3 white margin="0 auto 12px">
              Мы в соцсетях
            </Title3> */}
        {/* <ListGoods type="footer" array={arr5}></ListGoods> */}
        {/* </Wrapper> */}
        {/* </Wrapper> */}
      </Container>
    </StyledFooter>
  );
};
