import { FC } from "react";
import { MainProps } from ".";

import { StyledMain } from "./Main.styles";
import {
  Container,
  ListGoods,
  ButtonStandart,
  Wrapper,
  ButtonHomeInfo,
} from "components";

import { BsArrowDownShort } from "react-icons/bs";

import { allGoods } from "../../api/allGoods";

export const Main: FC<MainProps> = () => {
  return (
    <StyledMain>
      <Container>
        <Wrapper
          height="412px"
          width="100%"
          margin="0 0 36px"
          bgc="red"
        ></Wrapper>

        <ListGoods array={allGoods} type="main" />

        <ButtonStandart outlined padding="11px 84px 13px 64px" type="button">
          Показать еще
          <BsArrowDownShort width="2em" height="2em" />
        </ButtonStandart>

        <Wrapper
          display="home-info"
          margin="72px 0 0"
          height="136px"
          overflow="hidden"
        >
          <h2>Широкий ассортимент и высокое качество</h2>
          <p>
            Интернет-магазин Wildberries – это доступные цены, широкий,
            регулярно обновляемый ассортимент. В онлайн-каталоге Wildberries
            представлено около 300 000 ведущих брендов одежды, электроники,
            мебели и других товаров для всех сфер жизни. Покупателям
            предлагается электроника, книжная продукция, детские товары. В
            интернет-магазине можно приобрести продукцию для дома, продукты
            питания, товары для красоты, ювелирные изделия, игрушки. Для
            удобства пользования онлайн-каталог поделен на разделы, все товары
            можно сортировать по ряду критериев: цена, материал изготовления,
            сезонность, бренд.
          </p>
          <p>Выгодный шопинг</p>
          <p>
            Интернет-магазин Wildberries регулярно проводит масштабные
            распродажи. В рамках таких акций предоставляются большие скидки (до
            95%) на одежду, обувь, детские товары. Условия распродаж
            распространяются и на электронику, продукты питания, товары для
            дома, книги и многое другое. Чтобы быть в курсе предстоящих скидок
            или появления в ассортименте новых моделей от любимых брендов,
            достаточно подписаться на email-рассылку. Интернет-магазин одежды
            своевременно информирует получателей рассылки о распродажах,
            обновлении ассортимента. Дополнительные выгодные условия действуют
            для постоянных покупателей Wildberries – персональная скидка,
            зависящая от процента выкупа вещей. В Wildberries всегда
            ответственно подходят к выбору поставщиков, со многими
            производителями мы работаем напрямую, поэтому все категории товаров
            отличаются высоким качеством, разнообразием моделей и цветов,
            доступными ценами.
          </p>
          <p>Доставка и оплата без проблем</p>
          <p>
            Онлайн-магазин Wildberries осуществляет бесплатную доставку по всей
            России с помощью собственной курьерской службы. Покупатель может
            также забрать заказ из пункта выдачи заказов. Любую одежду, обувь и
            другие товары можно примерить перед оплатой заказа курьеру или в
            пункте выдачи заказа, оборудованном удобными примерочными.
          </p>
          <p>
            Wildberries предлагает несколько различных вариантов оплаты заказа
            как при оформлении, так и по факту при получении, - банковской
            картой или переводом, наличным расчетом или электронным платежом.
            Если товар не подошел, его можно вернуть с курьером как до оплаты
            заказа, так и после по почте или в одном из 26 000 пунктов выдачи
            заказа в течение 14 дней.
          </p>
          <p>Покупки всегда и везде</p>
          <p>
            Купить одежду, обувь, аксессуары, детские товары и товары для дома в
            Wildberries можно быстро и просто. Удобный вариант - покупки через
            специальное мобильное приложение. Его можно скачать и установить на
            любой смартфон. В мобильном приложении можно заказать и другие
            доступные товары - электронику, продукты питания, книги.
          </p>
          <p>
            Задать интересующий вопрос можно в любое время – наш call-центр
            работает 24/7.
          </p>
          <p>Начни прямо сейчас!</p>
          <p>
            Чтобы начать шопинг с Wildberries – необходимо пройти простую
            регистрацию на сайте, которая займет всего несколько минут. Оцените
            преимущества покупок одежды, обуви, электроники, детских товаров и
            продукции для дома, продуктов питания и книг в Wildberries уже
            сейчас.
          </p>
        </Wrapper>
        <ButtonHomeInfo>Читать далее</ButtonHomeInfo>
      </Container>
    </StyledMain>
  );
};
