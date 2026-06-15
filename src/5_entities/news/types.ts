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

export type ArticlePreview = {
  id: number;
  title: string;
  imageURL: string;
  description: string;
  published: string;
  updated: string;
};

export type CurrentArticleArgs = {
  articleId: number;
};

export type CurrentArticleDTO = {
  id: number;
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
  id: number;
  title: string;
  author: string;
  imageURL: string;
  description: string;
  published: string;
  updated: string;
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
  articles: ArticlePreview[];
};
