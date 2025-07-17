'use client'

import { useGetTopHeadlinesQuery } from '@/store/newsApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { toggleFavorite } from '@/store/favoritesSlice'
import { Article } from '@/types/Article'
import Image from 'next/image'

export default function Feed() {
  const categories = useSelector((state: RootState) => state.preferences.categories)
  const favorites = useSelector((state: RootState) => state.favorites.items)
  const dispatch = useDispatch()

  const { data, error, isLoading } = useGetTopHeadlinesQuery(categories)

  if (isLoading) return <div className="p-4">Loading feed...</div>
  if (error) return <div className="p-4 text-red-500">Error fetching news.</div>
  if (!data?.articles?.length) return <div className="p-4">No news found.</div>

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.articles.map((article: Article) => (
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
          <div className="flex justify-between items-center">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Read More →
            </a>
            <button
              onClick={() => dispatch(toggleFavorite(article.url))}
              className={`ml-4 px-3 py-2 rounded ${
                favorites.includes(article.url)
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {favorites.includes(article.url) ? '★ Saved' : '☆ Save'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
