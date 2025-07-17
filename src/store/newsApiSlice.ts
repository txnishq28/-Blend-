import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/', // 👈 calls your own server route!
  }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: (categories: string[]) => {
        const categoryQuery = categories.length > 0 ? categories[0] : 'general'
        return `news?category=${categoryQuery}`
      },
    }),
  }),
})

export const { useGetTopHeadlinesQuery } = newsApi
