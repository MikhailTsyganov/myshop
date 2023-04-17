import { useState, useEffect } from "react";

import { Backdrop } from "components";
import { Header, Main, Footer, Sidebar } from "containers";

import { goodsListApi } from "redux/api/goods-list-query/goods-list-query";

function App() {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const [goodsList, setGoodsList] = useState([]);

  const onToggleSidebar = () => {
    setIsOpenedSidebar((prevState) => !prevState);
    setShowBackdrop((prevState) => !prevState);
  };

  const goodsListQuery = goodsListApi.useGetGoodsListQuery("");

  useEffect(() => {
    setGoodsList(goodsListQuery.data);
  }, [goodsListQuery.data]);

  return (
    <>
      <Header view="basket" onOpenSidebar={onToggleSidebar} />
      <Main view="basket" />
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
