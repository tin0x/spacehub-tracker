import { useGetArticlesByNavigationQuery, useGetLimitedArticlesQuery } from '@entities/news/api/newsApi.ts';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { convertPageToOffset } from '@shared/lib/utils/convertPageToOffset.ts';
import type { ArticleWidgetProps } from '@widgets/types.ts';
import { useEffect } from 'react';

export const useGetArticles = (pageKey: ArticleWidgetProps['pageKey']) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // raw params
  const rawPage = searchParams.get('page');
  const rawOrdering = searchParams.get('ordering');

  // processed params
  const currentPage = Number(rawPage) && Number(rawPage) > 0 ? Number(rawPage) : 1;
  const ordering = rawOrdering !== '-published_at' && rawOrdering !== 'published_at' ? '-published_at' : rawOrdering;
  const search = searchParams.get('search') || '';

  // data processing for the query
  const itemsPerPage = 10;
  const offset = convertPageToOffset(currentPage, itemsPerPage);

  // processing parameters for correct display
  useEffect(() => {
    if (pageKey === 'home') return;

    const PARAM_KEYS = ['ordering', 'page', 'search'];

    const isPageInvalid = !rawPage || isNaN(Number(rawPage)) || Number(rawPage) <= 0;
    const isOrderingInvalid = !rawOrdering || (rawOrdering !== '-published_at' && rawOrdering !== 'published_at');
    const hasTrashKeys = Array.from(searchParams.keys()).some((key) => !PARAM_KEYS.includes(key));

    if (isPageInvalid || isOrderingInvalid || hasTrashKeys) {
      setSearchParams(
        () => {
          const cleanParams = new URLSearchParams();
          cleanParams.set('ordering', ordering);
          cleanParams.set('page', currentPage.toString());

          if (search) cleanParams.set('search', search);
          return cleanParams;
        },
        { replace: true },
      );
    }
  }, [setSearchParams, currentPage, ordering, rawPage, rawOrdering, searchParams, search, pageKey]);

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

  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return {
    data: data || [],
    totalCount: articlesByNavigation.data?.count ?? 0,
    isEmpty: length === 0,
    isLoading: isLoading || isFetching,
    isError,
    handleGoHome,
  };
};
