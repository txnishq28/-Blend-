import { useEffect, useState } from 'react'
import { Reorder } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { useGetTopHeadlinesQuery } from '@/store/newsApiSlice'
import { toggleFavorite } from '@/store/favoritesSlice'

export default function Feed() {
  const dispatch = useDispatch()
  const categories = useSelector((state: RootState) => state.preferences.categories)
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm)
  const favorites = useSelector((state: RootState) => state.favorites.items)

  const { data, isLoading } = useGetTopHeadlinesQuery(categories)
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    if (data?.articles) {
      setItems(data.articles)
    }
  }, [data])

  if (isLoading) return <div className="p-4">Loading your Blend feed...</div>

  const filtered = items.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-4">
      {filtered.map((item) => (
        <Reorder.Item
          key={item.url}
          value={item}
          className="p-4 bg-white dark:bg-black rounded shadow transition-colors"
          whileHover={{ scale: 1.02 }}
          whileDrag={{ scale: 1.05 }}
        >
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img
              src={item.urlToImage || 'https://via.placeholder.com/600x400?text=No+Image'}
              alt={item.title || 'News image'}
              className="w-full mb-2 rounded"
            />
          </a>
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{item.description}</p>
          <div className="flex items-center justify-between">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Read More →
            </a>
            <button
  onClick={() => dispatch(toggleFavorite(item.url))}
  className="ml-4 p-2 rounded border hover:bg-blue-100"
>
  {favorites.includes(item.url) ? '⭐' : '☆'}
</button>

          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}
