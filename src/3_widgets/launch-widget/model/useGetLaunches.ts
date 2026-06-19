import { useGetLaunchesByNavigationQuery } from '@entities/launch/api/launchApi.ts';
import { useSearchParams } from 'react-router-dom';

export const useGetLaunches = () => {
  const [searchParams] = useSearchParams();

  const ordering = searchParams.get('ordering') ?? '-last_updated';
  const status = searchParams.get('status') ? Number(searchParams.get('status')) : 1;
  const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 10;
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0;

  const { data, isLoading, isFetching, isError, refetch } = useGetLaunchesByNavigationQuery({
    ordering,
    status,
    limit,
    offset: page,
  });

  return {
    launches: data || [],
    isLoading: isLoading || isFetching,
    isEmpty: !data || data.length === 0,
    isError,
    refetch,
  };
};
