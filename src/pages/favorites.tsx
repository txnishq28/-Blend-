import Layout from '@/components/Layout'
import Favorites from '@/components/Favorites'

export default function FavoritesPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">⭐ Your Favorites</h1>
      <Favorites />
    </Layout>
  )
}
