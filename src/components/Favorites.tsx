'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useGetTopHeadlinesQuery } from '@/store/newsApiSlice'
import { Article } from '@/types/Article'
import Image from 'next/image'

export default function Favorites() {
  const categories = useSelector((state: RootState) => state.preferences.categories)
  const favorites = useSelector((state: RootState) => state.favorites.items)

  const { data, error, isLoading } = useGetTopHeadlinesQuery(categories)

  if (isLoading) return <div className="p-4">Loading favorites...</div>
  if (error) return <div className="p-4 text-red-500">Error fetching news.</div>
  if (!data?.articles?.length) return <div className="p-4">No news found for selected categories.</div>

  const favoriteArticles = data.articles.filter((article: Article) =>
    favorites.includes(article.url)
  )

  if (!favoriteArticles.length) {
    return <div className="p-4">No favorites yet. ⭐ Add some from your feed!</div>
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {favoriteArticles.map((article: Article) => (
        <div key={article.url} className="bg-white dark:bg-black rounded shadow p-4">
          {article.urlToImage && (
            <Image
              src={article.urlToImage}
              alt={article.title}
              width={400}
              height={250}
              className="w-full h-40 object-cover rounded mb-4"
            />
          )}
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-sm mb-4">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Read More →
          </a>
        </div>
      ))}
    </div>
  )
}
