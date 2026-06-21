import { useGetLaunchesByNavigationQuery } from '@entities/launch/api/launchApi.ts';
import { useSearchParams } from 'react-router-dom';
import { convertPageToOffset } from '@shared/lib/utils/convertPageToOffset.ts';

export const useGetLaunches = () => {
  const [searchParams] = useSearchParams();

  const ordering = searchParams.get('ordering') ?? '-last_updated';
  const status = searchParams.get('status') ? Number(searchParams.get('status')) : 1;
  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const itemsPerPage = 10;

  const currentPage = convertPageToOffset(page, itemsPerPage);

  const { data, isLoading, isFetching, isError, refetch } = useGetLaunchesByNavigationQuery({
    ordering,
    status,
    search,
    offset: currentPage,
  });

  return {
    launches: data?.launches || [],
    totalCount: data?.count || 0,
    isLoading: isLoading || isFetching,
    isEmpty: !data || data?.launches?.length === 0,
    isError,
    refetch,
  };
};
