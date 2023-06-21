import { commonApi } from "../common.api";
import { IGetSliderImages } from "types/api.types";

export const sliderImagesApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getSliderImages: builder.query<IGetSliderImages[], "">({
      query: () => `/sliderImages`,

      providesTags: ["sliderImages"],
    }),
  }),
});
