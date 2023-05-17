import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../../baseURL";

export const goodsListApi = createApi({
  reducerPath: "goodsListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  // tagTypes: ["goodsList"],
  endpoints: (builder) => ({
    getGoodsList: builder.query({
      query: () => `/listGoods`,
      // providesTags: ["goodsList"],
    }),
  }),
});
