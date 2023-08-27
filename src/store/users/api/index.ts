import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { FIREBASE_BASE_URL } from 'src/constants/firebase'
import { User } from 'src/types'

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
      query: (user: User) => ({
        url: `users/${user.localId}.json`,
        method: 'PUT',
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ localId, ...user }: User) => ({
        url: `users/${localId}.json`,
        method: 'PATCH',
        body: user,
      }),
    }),
  }),
})

export const { useCreateUserMutation, useGetUserByIdQuery, useUpdateUserMutation } = usersApi
