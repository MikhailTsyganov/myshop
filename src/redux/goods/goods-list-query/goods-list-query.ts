import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface IGoodsList {
//   id: number;
//   name: string;
// }

export const goodsListApi = createApi({
  reducerPath: "goodsListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://640848978ee73db92e3c49ff.mockapi.io",
  }),
  // tagTypes: ["goodsList"],
  endpoints: (builder) => ({
    getGoodsList: builder.query({
      query: () => `/goodsList`,
      // providesTags: ["goodsList"],
    }),
  }),
});

// interface IData {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// async function fetchData(): Promise<IData[]> {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   return data;
// }

// // Пример использования
// fetchData()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
