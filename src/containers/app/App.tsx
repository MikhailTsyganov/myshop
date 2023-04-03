import React, { useState, useEffect } from "react";

import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";
import { Backdrop } from "components";
import { goodsListApi } from "redux/goods/goods-list-query/goods-list-query";

function App() {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [goodsList, setGoodsList] = useState([]);

  const onToggleSidebar = () => {
    setIsOpenedSidebar((prevState) => !prevState);
    setShowBackdrop((prevState) => !prevState);
  };
  const { data, status } = goodsListApi.useGetGoodsListQuery("");

  useEffect(() => {
    if (status === "fulfilled") {
      setGoodsList(data);
      // console.log(status, data);
    }
  }, [data, status]);

  return (
    <>
      <Header onOpenSidebar={onToggleSidebar} />
      <Main />
      <Footer />

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
