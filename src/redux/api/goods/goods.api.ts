import { commonApi } from "../common.api";
import { IGetAllGoods, TGetAllGoodsBody } from "types/api.types";

export const goodsApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGoods: builder.query<IGetAllGoods, TGetAllGoodsBody>({
      query: (body) => ({
        url: `/goods`,
        method: "POST",
        body,
      }),
      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
        return { endpointName, queryArgs: { limit: queryArgs.limit } };
        // return { endpointName, queryArgs };
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.goods.push(...newItems.goods);
      },
      // Refetch when the page arg changes

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      keepUnusedDataFor: 0,
      providesTags: ["Goods"],
    }),
  }),
});
