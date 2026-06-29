import { useGetAstronautByIdQuery } from '@entities/astronaut/api/astronautApi.ts';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';

export const useGetDetailsAstronaut = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isError, refetch } = useGetAstronautByIdQuery(
    id ? { astronautId: Number(id) } : skipToken,
  );

  console.log(data);

  useToggleTitle(data?.basicInfo?.name ?? 'Astronaut');

  return {
    data: data,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
