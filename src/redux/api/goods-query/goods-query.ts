import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../baseURL";
import { TGoodsItemHomepage } from "components";

type TGetAllGoodsBody = { page: number; limit: number };

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllGoods: builder.query<TGoodsItemHomepage[], TGetAllGoodsBody>({
      query: (body) => ({
        url: `/goods`,
        method: "POST",
        body,
      }),
    }),
  }),
});
