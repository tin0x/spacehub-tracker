import { useGetLaunchesByNavigationQuery } from '@entities/launch/api/launchApi.ts';
import { useSearchParams } from 'react-router-dom';
import { convertPageToOffset } from '@shared/lib/utils/convertPageToOffset.ts';
import { useEffect } from 'react';

export const useGetLaunches = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // raw params
  const rawOrdering = searchParams.get('ordering');
  const rawStatus = searchParams.get('status');
  const rawPage = searchParams.get('page');

  // processed params
  const ordering =
    rawOrdering !== '-last_updated' &&
    rawOrdering !== 'last_updated' &&
    rawOrdering !== '-name' &&
    rawOrdering !== 'name'
      ? '-last_updated'
      : rawOrdering;
  const status = !isNaN(Number(rawStatus)) && Number(rawStatus) > 0 ? Number(rawStatus) : 1;
  const page = !isNaN(Number(rawPage)) && Number(rawPage) > 0 ? Number(rawPage) : 1;
  const search = searchParams.get('search') || '';

  // data processing for the query
  const itemsPerPage = 10;
  const currentPage = convertPageToOffset(page, itemsPerPage);

  // params processing for correct display
  useEffect(() => {
    const PARAMS_KEYS = ['ordering', 'status', 'page', 'search'];

    const isOrderingInvalid =
      !rawOrdering ||
      (rawOrdering !== '-last_updated' &&
        rawOrdering !== 'last_updated' &&
        rawOrdering !== '-name' &&
        rawOrdering !== 'name');
    const isStatusInvalid = !rawStatus || isNaN(Number(rawStatus)) || Number(rawStatus) <= 0;
    const isPageInvalid = !rawPage || isNaN(Number(rawPage)) || Number(rawPage) <= 0;
    const hasTrashKeys = Array.from(searchParams.keys()).some((key) => !PARAMS_KEYS.includes(key));

    if (isOrderingInvalid || isStatusInvalid || isPageInvalid || hasTrashKeys) {
      setSearchParams(
        () => {
          const cleanParams = new URLSearchParams();
          cleanParams.set('ordering', ordering);
          cleanParams.set('status', status.toString());
          cleanParams.set('page', page.toString());

          if (search) cleanParams.set('search', search);
          return cleanParams;
        },
        { replace: true },
      );
    }
  }, [ordering, page, rawOrdering, rawPage, rawStatus, search, searchParams, setSearchParams, status]);

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
