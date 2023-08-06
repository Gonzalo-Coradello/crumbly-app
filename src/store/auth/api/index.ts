import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_KEY, AUTH_BASE_URL } from 'src/constants/firebase'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: AUTH_BASE_URL }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `accounts:signUp?key=${API_KEY}`,
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: `accounts:signInWithPassword?key=${API_KEY}`,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation } = authApi
