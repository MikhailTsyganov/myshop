import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../baseURL";
import { TGoodsItemHomepage } from "components";

type TGetAllGoodsBody = { page: number; limit: number };

interface IGetAllGoods {
  goods: TGoodsItemHomepage[];
  total: number;
}

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Goods"],
  endpoints: (builder) => ({
    getAllGoods: builder.mutation<IGetAllGoods, TGetAllGoodsBody>({
      query: (body) => ({
        url: `/goods`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Goods"],
    }),
  }),
});
