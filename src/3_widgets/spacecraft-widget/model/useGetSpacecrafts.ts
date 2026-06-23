import { useGetSpacecraftByNavigationQuery } from '@entities/spacecraft/api/spacecraftApi.ts';
import { useSearchParams } from 'react-router-dom';
import { convertPageToOffset } from '@shared/lib/utils/convertPageToOffset.ts';

export const useGetSpacecrafts = () => {
  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const status = searchParams.get('status') ? Number(searchParams.get('status')) : 1;
  const ordering = searchParams.get('ordering') || '-flights_count';
  const search = searchParams.get('search') || '';

  const itemsPerPage = 10;
  const offset = convertPageToOffset(currentPage, itemsPerPage);

  const { data, isLoading, isFetching, isError, refetch } = useGetSpacecraftByNavigationQuery({
    limit: itemsPerPage,
    offset,
    status,
    ordering,
    search,
  });

  return {
    data: data?.results ?? [],
    totalCount: data?.count ?? 0,
    isEmpty: data?.results?.length === 0,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
