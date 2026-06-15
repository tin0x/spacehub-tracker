import { useGetLimitedArticlesQuery } from '@entities/news/api/newsApi.ts';

export const useGetArticles = () => {
  const { data, isLoading, isFetching, isError } = useGetLimitedArticlesQuery({ limit: 5 });

  return { data: data || [], isEmpty: data?.length === 0, isLoading: isLoading || isFetching, isError };
};
