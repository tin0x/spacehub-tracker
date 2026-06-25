import { useGetAgenciesByNavigationQuery } from '@entities/agency/api/agencyApi.ts';
import { useSearchParams } from 'react-router-dom';
import { convertPageToOffset } from '@shared/lib/utils/convertPageToOffset.ts';
import { useEffect } from 'react';

export const useGetAgencies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // raw params
  const rawOrdering = searchParams.get('ordering');
  const rawTypeId = searchParams.get('type__id');
  const rawPage = searchParams.get('page');

  // processed params
  const ordering =
    rawOrdering !== '-total_launch_count' &&
    rawOrdering !== 'total_launch_count' &&
    rawOrdering !== '-name' &&
    rawOrdering !== 'name'
      ? '-total_launch_count'
      : rawOrdering;
  const typeId = !isNaN(Number(rawTypeId)) && Number(rawTypeId) > 0 && Number(rawTypeId) < 6 ? Number(rawTypeId) : 1;
  const page = !isNaN(Number(rawPage)) && Number(rawPage) > 0 ? Number(rawPage) : 1;
  const search = searchParams.get('search') || '';

  // data processing for correct query
  const itemsPerPage = 10;
  const offset = convertPageToOffset(page, itemsPerPage);

  // data processing for correct URL display
  useEffect(() => {
    const PARAMS_KEYS = ['ordering', 'type__id', 'page', 'search'];

    const isOrderingInvalid =
      !rawOrdering ||
      (rawOrdering !== '-total_launch_count' &&
        rawOrdering !== 'total_launch_count' &&
        rawOrdering !== '-name' &&
        rawOrdering !== 'name');
    const isTypeIdInvalid = !rawTypeId || isNaN(Number(rawTypeId)) || Number(rawTypeId) <= 0 || Number(rawTypeId) > 5;
    const isPageInvalid = !rawPage || isNaN(Number(rawPage)) || Number(rawPage) <= 0;
    const hasTrashKeys = Array.from(searchParams.keys()).some((key) => !PARAMS_KEYS.includes(key));

    if (isOrderingInvalid || isTypeIdInvalid || isPageInvalid || hasTrashKeys) {
      setSearchParams(
        () => {
          const cleanParams = new URLSearchParams();
          cleanParams.set('ordering', ordering);
          cleanParams.set('type__id', typeId.toString());
          cleanParams.set('page', page.toString());

          if (search) cleanParams.set('search', search);
          return cleanParams;
        },
        { replace: true },
      );
    }
  }, [ordering, page, rawOrdering, rawPage, rawTypeId, search, searchParams, setSearchParams, typeId]);

  const { data, isLoading, isFetching, isError, refetch } = useGetAgenciesByNavigationQuery({
    offset,
    limit: itemsPerPage,
    typeId,
    ordering,
    search,
  });

  return {
    data: data?.results ?? [],
    totalCount: data?.count ?? 0,
    isEmpty: data?.results.length === 0,
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
