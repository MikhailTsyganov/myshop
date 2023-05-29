import { useState, useEffect } from "react";

import { Backdrop } from "components";
import { Header, Main, Footer, Sidebar, MobileNavMenu } from "containers";

import { refresh } from "redux/auth/auth-operations";
import { goodsListApi } from "redux/api/goodsList/goodsList.api";
import { useAppDispatch, useAppSelector } from "redux/hooks/hooks";
import { useLocation, Outlet } from "react-router-dom";
import { sidebarToggle } from "redux/selectors/selectors";

function App() {
  const dispatch = useAppDispatch();

  const { data: goodsList } = goodsListApi.useGetGoodsListQuery("");

  const showSidebar = useAppSelector(sidebarToggle);

  useEffect(() => {
    dispatch(refresh());
  }, []);

  return (
    <>
      <Outlet />

      <MobileNavMenu />
      {showSidebar && <Sidebar goodsList={goodsList} />}
    </>
  );
}

export default App;
