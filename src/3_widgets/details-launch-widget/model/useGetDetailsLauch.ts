import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';
import { useGetLaunchByIdQuery } from '@entities/launch/api/launchApi.ts';

export const useGetDetailsLaunch = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching, isError, refetch } = useGetLaunchByIdQuery(id ? { launchId: id } : skipToken);

  useToggleTitle(data?.video?.title || data?.launchInfo?.name || 'Launch');

  return {
    data: data,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
