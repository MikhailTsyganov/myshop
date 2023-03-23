import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsListApi = createApi({
  reducerPath: "goodsListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://640848978ee73db92e3c49ff.mockapi.io",
  }),
  // tagTypes: ["goodsList"],
  endpoints: (builder) => ({
    getGoodsList: builder.query({
      query: () => `/goodsList`,
      // providesTags: ["goodsList"],
    }),
  }),
});
