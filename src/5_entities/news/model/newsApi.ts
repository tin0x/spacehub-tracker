import { baseNewsApi } from "@shared/api/baseNewsApi.ts";
import { mapArticle } from "@entities/news/lib/utils/mappers.ts";
import type {
  Article,
  ArticlesDTO,
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
      transformResponse: (response: { results: ArticlesDTO[] }): Article[] => {
        return response.results.map(mapArticle);
      },
    }),
  }),
});

export const { useGetLimitedArticlesQuery } = newsApi;
