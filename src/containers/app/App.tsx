import React, { useState, useEffect } from "react";

import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";
import { Backdrop } from "components";
import { goodsListApi } from "redux/api/goods-list-query/goods-list-query";
import { goodsApi } from "redux/api/goods-query/goods-query";

function App() {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [goods, setGoods] = useState([]);
  const [goodsList, setGoodsList] = useState([]);

  const onToggleSidebar = () => {
    setIsOpenedSidebar((prevState) => !prevState);
    setShowBackdrop((prevState) => !prevState);
  };

  const goodsQuery = goodsApi.useGetAllGoodsQuery("");
  const goodsListQuery = goodsListApi.useGetGoodsListQuery("");

  useEffect(() => {
    // if (status === "fulfilled") {
    setGoodsList(goodsListQuery.data);
    setGoods(goodsQuery.data);
    // console.log(status, data);
    // }
  }, [goodsListQuery.data]);

  return (
    <>
      <Header view="basket" onOpenSidebar={onToggleSidebar} />
      <Main view="basket" goods={goods} />
      <Footer view="basket" />

      {showBackdrop && (
        <Backdrop onCloseSidebar={onToggleSidebar}>
          {isOpenedSidebar && (
            <Sidebar goodsList={goodsList} onCloseSidebar={onToggleSidebar} />
          )}
        </Backdrop>
      )}
    </>
  );
}

export default App;
