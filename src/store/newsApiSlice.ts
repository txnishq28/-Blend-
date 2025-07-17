// src/store/newsApiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY as string
console.log('ENV API KEY:', NEWS_API_KEY)

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/',
  }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: (categories: string[]) => {
        const categoryQuery = categories.length > 0 ? categories[0] : 'general'
        return `top-headlines?country=us&category=${categoryQuery}&apiKey=${NEWS_API_KEY}`
      },
    }),
  }),
})

export const { useGetTopHeadlinesQuery } = newsApi
