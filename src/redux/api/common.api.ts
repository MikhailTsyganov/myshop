import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../baseURL";
import { RootState } from "../store";

export const commonApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "Goods",
    "GoodsById",
    "goodsList",
    "goodsSubList",
    "aboutUs",
    "sliderImages",
    "GoodDetails",
  ],
  endpoints: (_) => ({}),
});
