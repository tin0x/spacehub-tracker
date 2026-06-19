import { useGetLimitedArticlesQuery } from '@entities/news/api/newsApi.ts';
import { useNavigate } from 'react-router-dom';

export const useGetArticles = () => {
  const { data, isLoading, isFetching, isError } = useGetLimitedArticlesQuery({ limit: 5 });

  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return { data: data || [], isEmpty: data?.length === 0, isLoading: isLoading || isFetching, isError, handleGoHome };
};
