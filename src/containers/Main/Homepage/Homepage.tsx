import { useState, useEffect, FC } from "react";
import { BsArrowDownShort } from "react-icons/bs";

import { HomepageProps } from ".";
import { StyledHomepage } from "./Homepage.styles";

import { goodsApi } from "redux/api/goods-query/goods-query";

import {
  List,
  GoodsItemHomepage,
  ButtonShowMore,
  Slider,
  HomeAboutUs,
} from "components";

export const Homepage: FC<HomepageProps> = (props) => {
  const [goods, setGoods] = useState<{}[]>([]); ////TODO
  const [page, setPage] = useState(1);

  const { data, isSuccess } = goodsApi.useGetAllGoodsQuery({ page, limit: 6 });
  // const {allGoods} = goodsApi.useGetAllGoodsQuery({ page, limit: 6 });

  // console.log(allGoods);

  useEffect(() => {
    if (isSuccess) {
      setGoods((prevState) => [...prevState, ...data]);
    }
  }, [data, isSuccess]);
  console.log(goods);

  const onShowMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <StyledHomepage {...props}>
      <Slider autoplay autoplayTime={4000} />
      {/* <List display="grid" Component={GoodsItemHomepage} array={goods} /> */}

      <ButtonShowMore outlined display="flex" onClick={onShowMore}>
        Показать еще
        <BsArrowDownShort size={30} />
      </ButtonShowMore>

      <HomeAboutUs />
    </StyledHomepage>
  );
};
