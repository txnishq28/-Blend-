import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category = 'general' } = req.query
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
  )

  const data = await response.json()
  res.status(200).json(data)
}
