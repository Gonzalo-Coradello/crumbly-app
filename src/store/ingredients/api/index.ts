import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FIREBASE_BASE_URL } from 'src/constants/firebase'

export const ingredientsApi = createApi({
  reducerPath: 'ingredientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_BASE_URL }),
  endpoints: (builder) => ({
    getIngredients: builder.query({
      query: () => 'ingredients.json',
      transformResponse: (response: any) =>
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
    }),
  }),
})

export const { useGetIngredientsQuery } = ingredientsApi
