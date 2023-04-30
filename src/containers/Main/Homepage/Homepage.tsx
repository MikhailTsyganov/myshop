import { useState, useEffect, FC } from "react";
import { BsArrowDownShort } from "react-icons/bs";

import { HomepageProps } from ".";
import { StyledHomepage } from "./Homepage.styles";

import { goodsApi } from "redux/api/goods-query/goods-query";
import { TGoodsItemHomepage } from "components";
import {
  List,
  GoodsItemHomepage,
  ButtonShowMore,
  Slider,
  HomeAboutUs,
} from "components";
import { useWindowSizeDevice } from "hooks";

export const Homepage: FC<HomepageProps> = (props) => {
  const [goods, setGoods] = useState<TGoodsItemHomepage[]>([]);
  const [page, setPage] = useState(1);
  const [totalGoods, setTotalGoods] = useState(0);

  const { device, numberOfGoodsInRequest } = useWindowSizeDevice();
  console.log(numberOfGoodsInRequest);

  const { data, isSuccess } = goodsApi.useGetAllGoodsQuery({
    page,
    limit: numberOfGoodsInRequest,
  });
  // const allGoods = goodsApi.useGetAllGoodsQuery({ page, limit: 6 });

  useEffect(() => {
    // if (status === "fulfilled" && data !== undefined) {    QUESTION
    if (isSuccess) {
      setGoods((prevState) => [...prevState, ...data.goods]);
      setTotalGoods(data.total);
    }
  }, [data]);

  const onShowMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <StyledHomepage {...props}>
      <Slider autoplay autoplayTime={4000} />
      <List display="grid" Component={GoodsItemHomepage} array={goods} />

      {goods.length < totalGoods && (
        <ButtonShowMore outlined display="flex" onClick={onShowMore}>
          Показать еще
          <BsArrowDownShort size={30} />
        </ButtonShowMore>
      )}

      <HomeAboutUs />
    </StyledHomepage>
  );
};
