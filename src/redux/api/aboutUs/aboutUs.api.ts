import { commonApi } from "../common.api";

interface get {
  description: string;
  id: string;
  title: string;
}

export const aboutUsApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getAboutUs: builder.query<get[], string>({
      query: () => `/aboutUs`,
      providesTags: ["aboutUs"],
    }),
  }),
});
