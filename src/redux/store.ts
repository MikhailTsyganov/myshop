import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { goodsListApi } from "./api/goods-list-query/goods-list-query";
// import { goodsApi } from "./api/goods-query/goods-query";
// import { aboutUsApi } from "./api/about-us-query/about-us-query";
// import { sliderImagesApi } from "./api/slider-images-query/slider-images-query";
// import { goodDetailsApi } from "./api/good-details/good-details-query";
import { commonApi } from "./api/common.api";
import rootReducer from "./reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      commonApi.middleware
      // goodsListApi.middleware,
      // goodsApi.middleware,
      // aboutUsApi.middleware,
      // sliderImagesApi.middleware,
      // goodDetailsApi.middleware
    ),
});
setupListeners(store.dispatch);

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
