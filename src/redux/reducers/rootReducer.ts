import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import goodsReducer from "redux/reducers/goods-reducer";
import sidebarReducer from "redux/reducers/sidebar-reducer/sidebar-reducer";
import auth from "redux/auth/auth-slice";
// import { goodsListApi } from "redux/api/goods-list-query/goods-list-query";
// import { goodsApi } from "redux/api/goods-query/goods-query";
// import { aboutUsApi } from "redux/api/about-us-query/about-us-query";
// import { sliderImagesApi } from "redux/api/slider-images-query/slider-images-query";
// import { goodDetailsApi } from "redux/api/good-details/good-details-query";
import { commonApi } from "redux/api/common.api";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  goodsReducer,
  sidebarReducer,
  auth: persistReducer(authPersistConfig, auth),
  [commonApi.reducerPath]: commonApi.reducer,
  // [goodsListApi.reducerPath]: goodsListApi.reducer,
  // [goodsApi.reducerPath]: goodsApi.reducer,
  // [aboutUsApi.reducerPath]: aboutUsApi.reducer,
  // [sliderImagesApi.reducerPath]: sliderImagesApi.reducer,
  // [goodDetailsApi.reducerPath]: goodDetailsApi.reducer,
});

export default rootReducer;
