import { commonApi } from "../common.api";

export const goodsListApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getGoodsList: builder.query({
      query: () => `/listGoods`,
      providesTags: ["goodsList"],
    }),
  }),
});
