export type ArticleDTO = {
  id: number;
  title: string;
  authors: [
    {
      name: string;
    },
  ];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
};

export type Article = {
  id: number;
  title: string;
  author: string;
  siteName: string;
  articleURL: string;
  imageURL: string;
  description: string;
  published: string;
  updated: string;
};

export type LimitedArticlesArgs = {
  limit: number;
};

export type ArticlesArgs = {
  limit: number;
  offset: number;
  ordering: string;
  search?: string;
};

export type CurrentArticleArgs = {
  articleId: number;
};
