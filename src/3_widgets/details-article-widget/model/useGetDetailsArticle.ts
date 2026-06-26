import { useGetArticleByIdQuery } from '@entities/news/api/newsApi.ts';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';

export const useGetDetailsArticle = () => {
  const { id } = useParams();
  const articleId = id ? Number(id) : undefined;

  const { data, isLoading, isFetching, isError, refetch } = useGetArticleByIdQuery(
    articleId ? { articleId } : skipToken,
  );

  return {
    data: data,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
