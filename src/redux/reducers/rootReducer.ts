import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import goodsReducer from "redux/reducers/goods-reducer";
import auth from "redux/auth/auth-slice";
import { goodsListApi } from "redux/api/goods-list-query/goods-list-query";
import { goodsApi } from "redux/api/goods-query/goods-query";
import { aboutUsApi } from "redux/api/about-us-query/about-us-query";
import { sliderImagesApi } from "redux/api/slider-images-query/slider-images-query";
import { goodDetailsApi } from "redux/api/good-details/good-details-query";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  goodsReducer,
  auth: persistReducer(authPersistConfig, auth),
  [goodsListApi.reducerPath]: goodsListApi.reducer,
  [goodsApi.reducerPath]: goodsApi.reducer,
  [aboutUsApi.reducerPath]: aboutUsApi.reducer,
  [aboutUsApi.reducerPath]: aboutUsApi.reducer,
  [sliderImagesApi.reducerPath]: sliderImagesApi.reducer,
  [goodDetailsApi.reducerPath]: goodDetailsApi.reducer,
});

export default rootReducer;
