import { useParams } from 'react-router-dom';
import { useGetAgencyByIdQuery } from '@entities/agency/api/agencyApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';

export const useGetDetailsAgency = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching, isError, refetch } = useGetAgencyByIdQuery(
    id ? { agencyId: Number(id) } : skipToken,
  );

  console.log(data);

  useToggleTitle(data?.name || 'Agency');

  return {
    data,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
