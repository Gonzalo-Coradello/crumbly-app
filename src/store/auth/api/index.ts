import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_KEY, AUTH_BASE_URL } from 'src/constants/firebase'

type Credentials = {
  email: string
  password: string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: AUTH_BASE_URL }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data: Credentials) => ({
        url: `accounts:signUp?key=${API_KEY}`,
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (credentials: Credentials) => ({
        url: `accounts:signInWithPassword?key=${API_KEY}`,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation } = authApi
