import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { FIREBASE_BASE_URL } from 'src/constants/firebase'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_BASE_URL }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (localId: string) => ({
        url: `users/${localId}.json`,
      }),
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: `users/${user.localId}.json`,
        method: 'PUT',
        body: user,
      }),
    }),
    // createOrUpdateRecipe: builder.mutation({
    //   query: (recipe: Recipe) => ({
    //     url: `recipes/${recipe.id}.json`,
    //     method: 'PUT',
    //     body: recipe,
    //   }),
    //   invalidatesTags: ['Recipes'],
    // }),
    updateUser: builder.mutation({
      query: (credentials) => ({
        url: ``,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useCreateUserMutation } = usersApi
