import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FIREBASE_BASE_URL } from 'src/constants/firebase'
import { Review } from 'src/types'

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_BASE_URL }),
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({
    getReviewsByRecipe: builder.query<Review[], string>({
      query: (recipeId: string) => `reviews.json?orderBy="recipeId"&equalTo="${recipeId}"`,
      transformResponse: (response: any) =>
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
      providesTags: ['Reviews'],
    }),
    createReview: builder.mutation({
      query: (review: Review) => ({
        url: `reviews/${review.id}.json`,
        method: 'PUT',
        body: review,
      }),
      invalidatesTags: ['Reviews'],
    }),
    deleteReview: builder.mutation({
      query: (id: string) => ({
        url: `reviews/${id}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reviews'],
    }),
  }),
})

export const { useGetReviewsByRecipeQuery, useCreateReviewMutation, useDeleteReviewMutation } =
  reviewsApi
