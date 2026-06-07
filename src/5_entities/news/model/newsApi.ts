import { baseNewsApi } from "@shared/api/baseNewsApi.ts";
import { mapArticle } from "@entities/news/lib/utils/mappers.ts";
import type {
  Article,
  ArticleDTO,
  ArticlesArgs,
  CurrentArticleArgs,
  LimitedArticlesArgs,
} from "@entities/news/types.ts";

const newsApi = baseNewsApi.injectEndpoints({
  endpoints: (build) => ({
    getLimitedArticles: build.query<Article[], LimitedArticlesArgs>({
      query: ({ limit }) => ({
        url: "/articles",
        params: {
          limit,
          ordering: "-published_at",
        },
      }),
      transformResponse: (response: { results: ArticleDTO[] }): Article[] => {
        return response.results.map(mapArticle);
      },
    }),
    getArticlesByNavigation: build.query<Article[], ArticlesArgs>({
      query: ({ limit, offset, ordering, search }) => ({
        url: "/articles",
        params: {
          limit,
          offset,
          ordering,
          search,
        },
      }),
      transformResponse: (response: { results: ArticleDTO[] }): Article[] => {
        return response.results.map(mapArticle);
      },
    }),
    getCurrentArticle: build.query<Article, CurrentArticleArgs>({
      query: ({ articleId }) => ({
        url: `/articles/${articleId}`,
      }),
      transformResponse: (response: ArticleDTO) => {
        return mapArticle(response);
      },
    }),
  }),
});

export const { useGetLimitedArticlesQuery, useGetArticlesByNavigationQuery, useGetCurrentArticleQuery } = newsApi;
