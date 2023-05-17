import { useState, useEffect } from "react";

import { Backdrop } from "components";
import { Header, Main, Footer, Sidebar, MobileNavMenu } from "containers";

import { refresh } from "redux/auth/auth-operations";
import { goodsListApi } from "redux/api/goods-list-query/goods-list-query";
import { useAppDispatch } from "redux/hooks/hooks";

function App() {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const [goodsList, setGoodsList] = useState([]);

  const dispatch = useAppDispatch();

  const onToggleSidebar = () => {
    setIsOpenedSidebar((prevState) => !prevState);
    setShowBackdrop((prevState) => !prevState);
  };

  const goodsListQuery = goodsListApi.useGetGoodsListQuery("");

  useEffect(() => {
    setGoodsList(goodsListQuery.data);
  }, [goodsListQuery.data]);

  useEffect(() => {
    dispatch(refresh());
  }, []);

  return (
    <>
      <Header
        // view="basket"
        onOpenSidebar={onToggleSidebar}
      />
      <Main
      // view="basket"
      />
      <Footer
      // view="basket"
      />

      {true && <MobileNavMenu />}

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
