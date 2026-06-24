import { useGetSpacecraftByNavigationQuery } from '@entities/spacecraft/api/spacecraftApi.ts';
import { useSearchParams } from 'react-router-dom';
import { convertPageToOffset } from '@shared/lib/utils/convertPageToOffset.ts';
import { useEffect } from 'react';

export const useGetSpacecrafts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // raw params
  const rawPage = searchParams.get('page');
  const rawStatus = searchParams.get('status');
  const rawOrdering = searchParams.get('ordering');

  // processed params
  const currentPage = Number(rawPage) && Number(rawPage) > 0 ? Number(rawPage) : 1;
  const status = Number(rawStatus) && Number(rawStatus) > 0 ? Number(rawStatus) : 1;
  const ordering = rawOrdering !== '-flights_count' && rawOrdering !== 'flights_count' ? '-flights_count' : rawOrdering;
  const search = searchParams.get('search') || '';

  // data processing for the request
  const itemsPerPage = 10;
  const offset = convertPageToOffset(currentPage, itemsPerPage);

  // processing parameters for correct display
  useEffect(() => {
    const PARAM_KEYS = ['ordering', 'status', 'page', 'search'];

    const isPageInvalid = !rawPage || isNaN(Number(rawPage)) || Number(rawPage) <= 0;
    const isStatusInvalid = !rawStatus || isNaN(Number(rawStatus)) || Number(rawStatus) <= 0;
    const isOrderingInvalid = !rawOrdering || (rawOrdering !== '-flights_count' && rawOrdering !== 'flights_count');
    const hasTrashKeys = Array.from(searchParams.keys()).some((key) => !PARAM_KEYS.includes(key));

    if (isPageInvalid || isStatusInvalid || isOrderingInvalid || hasTrashKeys) {
      setSearchParams(
        () => {
          const cleanParams = new URLSearchParams();
          cleanParams.set('ordering', ordering);
          cleanParams.set('status', status.toString());
          cleanParams.set('page', currentPage.toString());

          if (search) cleanParams.set('search', search);

          return cleanParams;
        },
        { replace: true },
      );
    }
  }, [setSearchParams, rawPage, rawStatus, currentPage, status, ordering, rawOrdering, searchParams, search]);

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
