import { FC, useState, useEffect, useRef } from "react";
import { ItemDetailProps } from ".";
import { StyledItemDetail } from "./ItemDetail.styles";
import { useParams } from "react-router-dom";
import { goodDetailsApi } from "redux/api/good-details/good-details-query";
import { useWindowSizeDevice } from "hooks";
import { WrapperPLUG } from "components";

export const ItemDetail: FC<ItemDetailProps> = (props) => {
  const fetchBigImages = useRef<boolean>(false);

  const { article } = useParams();

  const [sliderImages, setSliderImages] = useState([]);

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
    <StyledItemDetail {...props}>
      <section>
        <WrapperPLUG bgc="red" height="500px" minWidth="10px"></WrapperPLUG>
        <p>{data?.mainInfo.price}</p>
        <div>
          <p>
            <span>Цвет: </span>
            {data.mainInfo.variantName}
          </p>
          <ul style={{ display: "flex" }}>
            {data.variants.map((item) => (
              <li key={item.imageId}>
                <img src={item.path} alt={item.article} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>{data.mainInfo.brand}</p>
          <h1>{data.mainInfo.name}</h1>
          <div>
            <div className="stars"></div>
            <button>
              <b>ХЗ СКОЛЬКО</b> отзывов
            </button>
            <span>Арт: {article}</span>
            <span>Купили более {data.mainInfo.sold} раз</span>
          </div>
        </div>
        <div>
          <h2>О товаре</h2>
          <p>{data.mainInfo.description}</p>
          <table>
            <caption>Дополнительная информация</caption>
            <tbody></tbody>
          </table>
        </div>
      </section>
    </StyledItemDetail>
  ) : (
    <div>Не удалось получить данные с сервера, повторите попытку</div>
  );
};
