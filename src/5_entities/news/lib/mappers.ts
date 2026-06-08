import type { Article, ArticleDTO } from '@entities/news/types.ts';

export const mapArticle = (dto: ArticleDTO): Article => ({
  id: dto.id,
  title: dto.title,
  author: dto.authors?.[0]?.name ?? 'unknown',
  siteName: dto.news_site ?? 'unknown',
  articleURL: dto.url,
  imageURL: dto.image_url,
  description: dto.summary ?? 'unknown',
  published: dto.published_at,
  updated: dto.updated_at,
});
