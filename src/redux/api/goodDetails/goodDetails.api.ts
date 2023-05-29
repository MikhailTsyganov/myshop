import { commonApi } from "../common.api";
import { IGoodsDetailsParameters, IGetGoodDetails } from "types/api.types";

export const goodDetailsApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getGoodDetails: builder.mutation<IGetGoodDetails, IGoodsDetailsParameters>({
      query: ({ article, fetchBigImages }) => ({
        url: `/good-details`,
        method: "POST",
        body: { article, fetchBigImages },
      }),
      invalidatesTags: ["GoodDetails"],
    }),
  }),
});
