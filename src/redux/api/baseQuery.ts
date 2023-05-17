import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import type {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from "@reduxjs/toolkit/query";
// import BASE_URL from "./baseURL";
// // import { API } from "../common/const";

// const baseQuery = fetchBaseQuery({
//   baseUrl: BASE_URL,
//   // crendentials: "include" will face CORS if credential is not provided
//   credentials: "same-origin",
//   prepareHeaders: (headers) => {
//     const accessToken = localStorage.getItem("token");
//     if (accessToken) {
//       headers.set("authorization", `Bearer ${accessToken}`);
//       headers.set("Content-Type", "application/json");
//     }

//     return headers;
//   },
// });

// export const baseQueryWithReauth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   return await baseQuery(args, api, extraOptions);
// };
