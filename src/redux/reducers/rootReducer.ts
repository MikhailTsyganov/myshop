import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import goodsReducer from "redux/reducers/goods-reducer";
import sidebarReducer from "redux/reducers/sidebar-reducer/sidebar-reducer";
import selectedGoods from "./selectedGoods-reducer/selectedGoods-reducer";
import auth from "redux/auth/auth-slice";
import { commonApi } from "redux/api/common.api";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  goodsReducer,
  sidebarReducer,
  selectedGoods,
  auth: persistReducer(authPersistConfig, auth),
  [commonApi.reducerPath]: commonApi.reducer,
});

export default rootReducer;
