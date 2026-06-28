import { useGetSpacecraftByIdQuery } from '@entities/spacecraft/api/spacecraftApi.ts';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';

export const useGetDetailsSpacecraft = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching, isError, refetch } = useGetSpacecraftByIdQuery(
    id ? { spacecraftId: id } : skipToken,
  );

  useToggleTitle(data?.basicInfo?.name || data?.config?.name || 'Spacecraft');

  return {
    data: data,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
