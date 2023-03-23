import { FC } from "react";
import { SidebarProps } from ".";
// import { goods } from "api/goods";

import { ListGoods, ButtonClose, Wrapper } from "components";
import { goodsListApi } from "redux/goods/goods-list-query/goods-list-query";

export const Sidebar: FC<SidebarProps> = ({ onCloseSidebar }) => {
  const { data: goodsList } = goodsListApi.useGetGoodsListQuery("");
  console.log(goodsList);

  return (
    <Wrapper display="sidebar">
      <ListGoods array={goodsList} type="sidebar"></ListGoods>

      <ButtonClose onCloseSidebar={onCloseSidebar}></ButtonClose>
    </Wrapper>
  );
};
