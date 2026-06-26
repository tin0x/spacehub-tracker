import type { ArticlePreview, ArticlePreviewDTO, CurrentArticle, CurrentArticleDTO } from '@entities/news/types.ts';

export const mapArticlePreview = (dto: ArticlePreviewDTO): ArticlePreview => ({
  id: dto.id,
  title: dto.title,
  imageURL: dto.image_url,
  description: dto.summary,
  published: dto.published_at,
  updated: dto.updated_at,
});

export const mapCurrentArticle = (dto: CurrentArticleDTO): CurrentArticle => ({
  title: dto.title,
  author: dto.authors?.[0]?.name ?? 'unknown',
  website: {
    name: dto.news_site ?? 'unknown',
    url: dto.url,
  },
  imageUrl: dto.image_url,
  description: dto.summary ?? 'unknown',
  published: dto.published_at,
  updated: dto.updated_at,
});
