import { combineReducers } from "@reduxjs/toolkit";
import goodsReducer from "redux/goods/goods-reducer";
import { goodsListApi } from "redux/goods/goods-list-query/goods-list-query";

const rootReducer = combineReducers({
  goodsReducer,
  [goodsListApi.reducerPath]: goodsListApi.reducer,
});

export default rootReducer;
