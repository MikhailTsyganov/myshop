import { commonApi } from "../common.api";

export const sliderImagesApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getSliderImages: builder.query({
      query: () => `/sliderImages`,
      providesTags: ["sliderImages"],
    }),
  }),
});
