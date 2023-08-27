import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FIREBASE_BASE_URL } from 'src/constants/firebase'
import { Recipe } from 'src/types'

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_BASE_URL }),
  tagTypes: ['Recipes'],
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => 'recipes.json',
      transformResponse: (response: any) =>
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
      providesTags: ['Recipes'],
    }),
    getRecipesByCategory: builder.query<Recipe[], string>({
      query: (categoryId: string) => `recipes.json?orderBy="categoryId"&equalTo="${categoryId}"`,
      transformResponse: (response: any) =>
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
      providesTags: ['Recipes'],
    }),
    getRecipeById: builder.query({
      query: (id: string) => `recipes.json?orderBy="id"&equalTo="${id}"`,
      transformResponse: (response: any) =>
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
      providesTags: ['Recipes'],
    }),
    createOrUpdateRecipe: builder.mutation({
      query: (recipe: Recipe) => ({
        url: `recipes/${recipe.id}.json`,
        method: 'PUT',
        body: recipe,
      }),
      invalidatesTags: ['Recipes'],
    }),
    deleteRecipe: builder.mutation({
      query: (id: string) => ({
        url: `recipes/${id}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Recipes'],
    }),
  }),
})

export const {
  useGetRecipesQuery,
  useGetRecipesByCategoryQuery,
  useGetRecipeByIdQuery,
  useCreateOrUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipesApi
