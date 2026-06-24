import { useGetAstronautsByNavigationQuery } from '@entities/astronaut/api/astronautApi.ts';
import { useSearchParams } from 'react-router-dom';
import { convertPageToOffset } from '@shared/lib/utils/convertPageToOffset.ts';
import { useEffect } from 'react';

export const useGetAstronauts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // raw params
  const rawOrdering = searchParams.get('ordering');
  const rawStatusIds = searchParams.get('status_ids');
  const rawPage = searchParams.get('page');

  // processed params
  const ordering =
    rawOrdering !== '-time_in_space' &&
    rawOrdering !== 'time_in_space' &&
    rawOrdering !== '-flights_count' &&
    rawOrdering !== 'flights_count'
      ? '-time_in_space'
      : rawOrdering;
  const statusIds =
    !isNaN(Number(rawStatusIds)) && Number(rawStatusIds) > 0 && Number(rawStatusIds) < 3 ? Number(rawStatusIds) : 1;
  const page = !isNaN(Number(rawPage)) && Number(rawPage) > 0 ? Number(rawPage) : 1;
  const search = searchParams.get('search') || '';

  // data processing for correct query
  const itemsPerPage = 10;
  const offset = convertPageToOffset(page, itemsPerPage);

  useEffect(() => {
    const PARAMS_KEYS = ['ordering', 'status_ids', 'page', 'search'];

    const isOrderingInvalid =
      !rawOrdering ||
      (rawOrdering !== '-time_in_space' &&
        rawOrdering !== 'time_in_space' &&
        rawOrdering !== '-flights_count' &&
        rawOrdering !== 'flights_count');
    const isStatusIdsInvalid =
      !rawStatusIds || isNaN(Number(rawStatusIds)) || Number(rawStatusIds) <= 0 || Number(rawStatusIds) > 2;
    const isPageInvalid = !rawPage || isNaN(Number(rawPage)) || Number(rawPage) <= 0;
    const hasTrashKeys = Array.from(searchParams.keys()).some((key) => !PARAMS_KEYS.includes(key));

    if (isOrderingInvalid || isStatusIdsInvalid || isPageInvalid || hasTrashKeys) {
      setSearchParams(
        () => {
          const cleanParams = new URLSearchParams();
          cleanParams.set('ordering', ordering);
          cleanParams.set('status_ids', statusIds.toString());
          cleanParams.set('page', page.toString());

          if (search) cleanParams.set('search', search);
          return cleanParams;
        },
        { replace: true },
      );
    }
  }, [ordering, page, rawOrdering, rawPage, rawStatusIds, search, searchParams, setSearchParams, statusIds]);

  const { data, isLoading, isFetching, isError, refetch } = useGetAstronautsByNavigationQuery({
    limit: itemsPerPage,
    offset,
    ordering,
    statusIds,
    search,
  });

  return {
    data: data?.results || [],
    isEmpty: data?.results?.length === 0,
    totalCount: data?.count || 0,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
