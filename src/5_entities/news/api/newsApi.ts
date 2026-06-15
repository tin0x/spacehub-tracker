import { baseNewsApi } from '@shared/api/baseNewsApi.ts';
import { mapArticlePreview, mapCurrentArticle } from '@entities/news/lib/mappers.ts';
import type {
  ArticleFilteredPreviewArgs,
  ArticlePreview,
  ArticlePreviewArgs,
  ArticlePreviewDTO,
  CurrentArticle,
  CurrentArticleArgs,
  CurrentArticleDTO,
} from '@entities/news/types.ts';

const newsApi = baseNewsApi.injectEndpoints({
  endpoints: (build) => ({
    getLimitedArticles: build.query<ArticlePreview[], ArticlePreviewArgs>({
      query: ({ limit }) => ({
        url: '/articles',
        params: {
          limit,
          ordering: '-published_at',
        },
      }),
      transformResponse: (response: { results: ArticlePreviewDTO[] }): ArticlePreview[] => {
        return response.results.map(mapArticlePreview);
      },
    }),
    getArticlesByNavigation: build.query<ArticlePreview[], ArticleFilteredPreviewArgs>({
      query: ({ limit, offset, ordering, search }) => ({
        url: '/articles',
        params: {
          limit,
          offset,
          ordering,
          search,
        },
      }),
      transformResponse: (response: { results: ArticlePreviewDTO[] }): ArticlePreview[] => {
        return response.results.map(mapArticlePreview);
      },
    }),
    getArticleById: build.query<CurrentArticle, CurrentArticleArgs>({
      query: ({ articleId }) => ({
        url: `/articles/${articleId}`,
      }),
      transformResponse: (response: CurrentArticleDTO): CurrentArticle => {
        return mapCurrentArticle(response);
      },
    }),
  }),
});

export const { useGetLimitedArticlesQuery, useGetArticlesByNavigationQuery, useGetArticleByIdQuery } = newsApi;
