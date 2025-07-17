import { Article } from '@/types/Article'

const favoriteArticles = data.articles.filter((article: Article) =>
  favorites.includes(article.url)
)

...

{favoriteArticles.map((article: Article) => (...))}
