import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FIREBASE_BASE_URL } from 'src/constants/firebase'
import { Recipe } from 'src/types'

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_BASE_URL }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => 'recipes.json',
      transformResponse: (response: any) =>
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
    }),
    getRecipesByCategory: builder.query<Recipe[], string>({
      query: (categoryId) => `recipes.json?orderBy="categoryId"&equalTo="${categoryId}"`,
      transformResponse: (response: any) =>
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
    }),
    getRecipeById: builder.query({
      query: (id: string) => `recipes.json?orderBy="id"&equalTo="${id}"`,
      transformResponse: (response: any) =>
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
    }),
    createRecipe: builder.mutation({
      query: (recipe: Recipe) => ({
        url: 'recipes.json',
        method: 'POST',
        body: recipe,
      }),
    }),
    updateRecipe: builder.mutation({
      query: ({ id, ...recipe }: Recipe) => ({
        url: `recipes.json?orderBy="id"&equalTo"${id}"`,
        method: 'PUT',
        body: recipe,
      }),
    }),
    deleteRecipe: builder.mutation({
      query: (id: string) => ({
        url: `recipes.json?orderBy="id"&equalTo="${id}"`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetRecipesQuery,
  useGetRecipesByCategoryQuery,
  useGetRecipeByIdQuery,
  useCreateRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipesApi