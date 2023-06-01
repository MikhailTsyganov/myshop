import { commonApi } from "../common.api";

export const goodsListApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getGoodsList: builder.query({
      query: () => `/listGoods`,
      providesTags: ["goodsList"],
    }),

    getSubGoodsList: builder.query<
      { id: string; name: string }[],
      { id: string }
    >({
      query: ({ id }) => `/listGoods/${id}`,
      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
        return { queryArgs: { id: queryArgs.id } };
      },
      // Always merge incoming data to the cache entry
      merge: (prevCache, newCache) => {
        prevCache.push(...newCache);
      },
      // providesTags: (result) => {
      //   result
      //     ? [
      //         ...result.map(({ id }) => ({
      //           type: "goodsSubList" as const,
      //           id,
      //         })),
      //         { type: "goodsSubList", id: "LISTSUB" },
      //       ]
      //     : [{ type: "goodsSubList", id: "LISTSUB" }];
      // },
      providesTags: ["goodsSubList"],
    }),
  }),
});
