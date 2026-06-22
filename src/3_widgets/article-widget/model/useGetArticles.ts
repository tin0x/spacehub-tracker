import { useGetArticlesByNavigationQuery, useGetLimitedArticlesQuery } from '@entities/news/api/newsApi.ts';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { convertPageToOffset } from '@shared/lib/utils/convertPageToOffset.ts';
import type { ArticleWidgetProps } from '@widgets/types.ts';

export const useGetArticles = (pageKey: ArticleWidgetProps['pageKey']) => {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const ordering = searchParams.get('ordering') || '-published_at';
  const search = searchParams.get('search') || '';

  const itemsPerPage = 10;
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  const offset = convertPageToOffset(currentPage, itemsPerPage);

  const limitedArticles = useGetLimitedArticlesQuery(pageKey === 'home' ? { limit: 5 } : skipToken);
  const articlesByNavigation = useGetArticlesByNavigationQuery(
    pageKey === 'news'
      ? {
          offset,
          limit: itemsPerPage,
          ordering,
          search,
        }
      : skipToken,
  );

  const data = pageKey === 'news' ? articlesByNavigation.data?.results : limitedArticles.data;
  const length = pageKey === 'news' ? articlesByNavigation?.data?.results.length : limitedArticles?.data?.length;
  const isLoading = pageKey === 'news' ? articlesByNavigation.isLoading : limitedArticles.isLoading;
  const isFetching = pageKey === 'news' ? articlesByNavigation.isFetching : limitedArticles.isFetching;
  const isError = pageKey === 'news' ? articlesByNavigation.isError : limitedArticles.isError;

  return {
    data: data || [],
    totalCount: articlesByNavigation.data?.count ?? 0,
    isEmpty: length === 0,
    isLoading: isLoading || isFetching,
    isError,
    handleGoHome,
  };
};
