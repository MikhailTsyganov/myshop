import { commonApi } from "../common.api";
import {
  IGetAllGoods,
  IGetAllGoodsBody,
  IGetGoodsByCategoryBody,
} from "types/api.types";

export const goodsApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGoods: builder.query<IGetAllGoods, IGetAllGoodsBody>({
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
      merge: (prevCache, newCache) => {
        prevCache.goods.push(...newCache.goods);
      },
      // Refetch when the page arg changes

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      keepUnusedDataFor: 0,
      providesTags: ["Goods"],
    }),

    getGoodsByCategory: builder.query<IGetAllGoods, IGetGoodsByCategoryBody>({
      query: ({ category, subcategory = "", limit, page }) =>
        `/goods/${category}/${subcategory}?page=${page}&limit=${limit}`,

      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
        return {
          queryArgs: {
            limit: queryArgs.limit,
            category: queryArgs.category,
            subcategory: queryArgs.subcategory,
          },
        };
        // return { endpointName, queryArgs };
      },
      // Always merge incoming data to the cache entry
      merge: (prevCache, newCache) => {
        prevCache.goods.push(...newCache.goods);
      },
      // Refetch when the page arg changes

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      keepUnusedDataFor: 0,
      providesTags: ["GoodsById"],
    }),
  }),
});
