import { FC, useState, useEffect, useRef } from "react";
import { ItemDetailProps } from ".";
import {
  StyledItemDetail,
  ParagraphGoodPrice,
  WrapperGoodsVariant,
  ParagraphGoodBrand,
  WrapperGoodDetailsGreyBorder,
  WrapperGoodDetailsRating,
  WrapperGoodDetailsDescription,
} from "./ItemDetail.styles";
import { useParams } from "react-router-dom";
import { goodDetailsApi } from "redux/api/goodDetails/goodDetails.api";
import { useWindowSizeDevice } from "hooks";
import {
  GoodDetailsSlider,
  OpeningText,
  StarsRating,
  Table,
  Title1,
  Title2,
} from "components";

import { Header, Main, Footer } from "containers";

export const ItemDetail: FC<ItemDetailProps> = (props) => {
  const fetchBigImages = useRef<boolean>(false);

  const { article } = useParams();

  // const [sliderImages, setSliderImages] = useState([]);

  const { device } = useWindowSizeDevice();

  const [getGoodDetails, { data }] = goodDetailsApi.useGetGoodDetailsMutation();

  console.log(data);

  useEffect(() => {
    if (device === "mobile" || device === "tablet") {
      fetchBigImages.current = false;
    } else {
      fetchBigImages.current = true;
    }
  }, [device]);

  useEffect(() => {
    getGoodDetails({ article, fetchBigImages: fetchBigImages.current });
  }, []);

  return data ? (
    <>
      <Header />
      <Main>
        <StyledItemDetail {...props}>
          <section>
            <GoodDetailsSlider slides={data.mediumImages} />
            <ParagraphGoodPrice>{data.mainInfo.price} ₽</ParagraphGoodPrice>
            <WrapperGoodsVariant>
              <p>
                <span className="goodsVariant_color">Цвет: </span>
                {data.mainInfo.variantName}
              </p>
              <ul className="goodsVariant_list">
                {data.variants.map((item) => (
                  <li key={item.imageId}>
                    <img
                      src={item.path}
                      alt={item.article}
                      className="goodsVariant_image"
                      width="100%"
                    />
                  </li>
                ))}
              </ul>
            </WrapperGoodsVariant>
            <WrapperGoodDetailsGreyBorder>
              <ParagraphGoodBrand>{data.mainInfo.brand}</ParagraphGoodBrand>
              <h1>{data.mainInfo.name}</h1>
              <WrapperGoodDetailsRating>
                <StarsRating rating={data.mainInfo.rating} />
                <p className="WrapperGoodDetailsRating_review">? отзывов</p>
                <p className="WrapperGoodDetailsRating_article">
                  Арт: <span>{article}</span>
                </p>
                <p className="WrapperGoodDetailsRating_sold">
                  Купили более {data.mainInfo.sold} раз
                </p>
              </WrapperGoodDetailsRating>
            </WrapperGoodDetailsGreyBorder>
            <WrapperGoodDetailsGreyBorder>
              <WrapperGoodDetailsDescription>
                <Title2>О товаре</Title2>
                <OpeningText
                  Component={data.mainInfo.description}
                  height="100px"
                  buttonText={{
                    onShow: "Развернуть описание",
                    onHide: "Свернуть описание",
                  }}
                />

                {data.additionalInformation.map((item, idx) => (
                  <Table key={idx} title={item.title} rows={item.rows} />
                ))}
              </WrapperGoodDetailsDescription>
            </WrapperGoodDetailsGreyBorder>
          </section>
        </StyledItemDetail>
      </Main>
      <Footer />
    </>
  ) : (
    <div>Не удалось получить данные с сервера, повторите попытку</div>
  );
};
