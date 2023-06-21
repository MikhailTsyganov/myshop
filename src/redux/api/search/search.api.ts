import { commonApi } from "../common.api";
import { IGetSearchFavorites, IGetSearchAdditionalInfo } from "types/api.types";

export const searchApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getSearchFavorites: builder.query<IGetSearchFavorites[], "">({
      query: () => `/search-favorites`,
    }),
    getSearchAdditionalInfo: builder.query<IGetSearchAdditionalInfo, string>({
      query: (query) => `/search-additional-info?q=${query}`,
    }),
  }),
});
