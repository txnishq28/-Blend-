'use client'

import { useGetTopHeadlinesQuery } from '@/store/newsApiSlice'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Article } from '@/types/Article'
import Image from 'next/image'

export default function Trending() {
  const categories = useSelector((state: RootState) => state.preferences.categories)
  const { data, error, isLoading } = useGetTopHeadlinesQuery(categories)

  if (isLoading) return <div className="p-4">Loading trending news...</div>
  if (error) return <div className="p-4 text-red-500">Error fetching trending news.</div>
  if (!data?.articles?.length) return <div className="p-4">No trending news found.</div>

  const trending = data.articles.slice(0, 5)

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {trending.map((article: Article, idx: number) => (
        <div key={idx} className="bg-white dark:bg-black rounded shadow p-4">
          {article.urlToImage && (
            <Image
              src={article.urlToImage}
              alt={article.title}
              width={600}
              height={300}
              className="w-full h-40 object-cover rounded mb-4"
            />
          )}
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-sm mb-4">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  )
}
