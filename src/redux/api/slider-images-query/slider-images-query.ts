import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../baseURL";

export const sliderImagesApi = createApi({
  reducerPath: "sliderImagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  // tagTypes: ["goodsList"],
  endpoints: (builder) => ({
    getSliderImages: builder.query({
      query: () => `/sliderImages`,
      // providesTags: ["goodsList"],
    }),
  }),
});
