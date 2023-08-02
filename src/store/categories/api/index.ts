import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FIREBASE_BASE_URL } from 'src/constants/firebase'

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories.json',
      transformResponse: (response: any) =>
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
    }),
  }),
})

export const { useGetCategoriesQuery } = categoriesApi
