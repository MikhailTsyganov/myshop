import { combineReducers } from "@reduxjs/toolkit";
import goodsReducer from "redux/reducers/goods-reducer";
import { goodsListApi } from "redux/api/goods-list-query/goods-list-query";
import { goodsApi } from "redux/api/goods-query/goods-query";

const rootReducer = combineReducers({
  goodsReducer,
  [goodsListApi.reducerPath]: goodsListApi.reducer,
  [goodsApi.reducerPath]: goodsApi.reducer,
  // sidebarData
  // goodsData -> first
});

export default rootReducer;
