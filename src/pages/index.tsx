import Layout from '@/components/Layout'
import Feed from '@/components/Feed'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center py-8">
        <h1 className="text-3xl font-bold mb-4">Dive into Your Infinite Blend ♾️</h1>
        <h2 className="text-3xl font-bold mb-4">🚀 Your Blend Feed 🚀</h2>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="text-2xl"
        >
          ⬇️
        </motion.div>
      </div>

      <Feed />
    </Layout>
  )
}
