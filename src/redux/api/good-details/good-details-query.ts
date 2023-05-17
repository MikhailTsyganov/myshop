import { MutableRefObject } from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../../baseURL";

type TParameters = {
  article: string | undefined;
  fetchBigImages: boolean;
};

type TImage = {
  id: string;
  "parent_goods-variant_id": string;
  path: string;
  size: string;
};

interface IGetGoodDetails {
  mainInfo: {
    id: number;
    sold: number;
    price: number;
    name: string;
    brand: string;
    rating: number;
    description: string;
    variantName: string;
  };

  bigImages: TImage[];
  mediumImages: TImage[];
  smallImages: TImage[];
  videos: { id: string; path: string }[];
  variants: {
    article: string;
    imageId: string;
    path: string;
    variantId: string;
  }[];
}

export const goodDetailsApi = createApi({
  reducerPath: "goodDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["GoodDetails"],
  endpoints: (builder) => ({
    getGoodDetails: builder.mutation<IGetGoodDetails, TParameters>({
      query: ({ article, fetchBigImages }) => ({
        url: `/good-details`,
        method: "POST",
        body: { article, fetchBigImages },
      }),
      invalidatesTags: ["GoodDetails"],
    }),
  }),
});
