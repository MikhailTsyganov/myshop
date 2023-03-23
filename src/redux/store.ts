import { configureStore } from "@reduxjs/toolkit";
import { goodsListApi } from "./goods/goods-list-query/goods-list-query";
import rootReducer from "./reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsListApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
