export type ArticlePreviewArgs = {
  limit: number;
};

export type ArticleFilteredPreviewArgs = {
  limit: number;
  offset: number;
  ordering: string;
  search?: string;
};

export type ArticlePreviewDTO = {
  id: number;
  title: string;
  image_url: string;
  summary: string;
  published_at: string;
  updated_at: string;
};

export type ArticlePreviewsDTO = {
  count: number;
  results: ArticlePreviewDTO[];
};

export type ArticlePreview = {
  id: number;
  title: string;
  imageURL: string;
  description: string;
  published: string;
  updated: string;
};

export type ArticlePreviews = {
  count: number;
  results: ArticlePreview[];
};

export type CurrentArticleArgs = {
  articleId: number;
};

export type CurrentArticleDTO = {
  title: string;
  authors: {
    name: string;
  }[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
};

export type CurrentArticle = {
  title: string;
  author: string;
  imageUrl: string;
  description: string;
  published: string;
  updated?: string;
  website: {
    name: string;
    url: string;
  };
};

// Ui

export type ArticleItemProps = {
  article: ArticlePreview;
};

export type ArticleListProps = {
  articles: ArticlePreview[] | ArticlePreviews;
};

export type ArticleDetailsCardProps = {
  imageUrl: string;
  imageAlt: string;
  websiteName: string;
  websiteUrl: string;
} & Omit<CurrentArticle, 'id' | 'website' | 'title'>;
