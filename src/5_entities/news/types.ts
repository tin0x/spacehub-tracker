export type ArticlesDTO = {
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
