import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../../baseURL";

export const aboutUsApi = createApi({
  reducerPath: "aboutUsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAboutUs: builder.query({
      query: () => `/aboutUs`,
    }),
  }),
});
