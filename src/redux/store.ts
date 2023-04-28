import { configureStore } from "@reduxjs/toolkit";
import { goodsListApi } from "./api/goods-list-query/goods-list-query";
import { goodsApi } from "./api/goods-query/goods-query";
import { aboutUsApi } from "./api/about-us-query/about-us-query";
import { sliderImagesApi } from "./api/slider-images-query/slider-images-query";
import rootReducer from "./reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      goodsListApi.middleware,
      goodsApi.middleware,
      aboutUsApi.middleware,
      sliderImagesApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
