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

  const { numberOfGoodsInRequest } = useWindowSizeDevice();

  const [getAllGoods, {}] = goodsApi.useGetAllGoodsMutation();

  useEffect(() => {
    getAllGoods({ page, limit: numberOfGoodsInRequest }).then((data) => {
      if ("data" in data) {
        setTotalGoods(data.data.total);
      }
    });
  }, []);

  useEffect(() => {
    setPage(1);
    getAllGoods({ page: 1, limit: numberOfGoodsInRequest }).then((data) => {
      if ("data" in data) setGoods(data.data.goods);
    });
  }, [numberOfGoodsInRequest]);

  useEffect(() => {
    getAllGoods({ page, limit: numberOfGoodsInRequest }).then((data) => {
      if ("data" in data) {
        if (page === 1) return;
        setGoods((prevState) => [...prevState, ...data.data.goods]);
      }
    });
  }, [page]);

  const onShowMore = () => {
    setPage((prevState) => prevState + 1);
  };

  console.log(goods);

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
