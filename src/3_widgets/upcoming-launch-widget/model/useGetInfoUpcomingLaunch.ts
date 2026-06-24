import { useGetUpcomingLaunchQuery } from '@entities/launch/api/launchApi.ts';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const useGetInfoUpcomingLaunch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { futureLaunch, isLoading, isFetching, isError } = useGetUpcomingLaunchQuery(undefined, {
    selectFromResult: ({ data, isLoading, isFetching, isError }) => {
      const now = Date.now();
      const found = data?.find((l) => now < l.timer);

      return {
        futureLaunch: found,
        isLoading,
        isFetching,
        isError,
      };
    },
  });

  useEffect(() => {
    const hasTrashKeys = Array.from(searchParams.keys()).length > 0;

    if (hasTrashKeys) setSearchParams(() => new URLSearchParams(), { replace: true });
  }, [searchParams, setSearchParams]);

  const navigate = useNavigate();
  const handleGoHome = () => navigate('/');

  return {
    isEmpty: !futureLaunch && !isLoading && !isFetching,
    video: futureLaunch?.video,
    fallback: futureLaunch?.fallback,
    heading: futureLaunch?.heading,
    timer: futureLaunch?.timer,
    mission: futureLaunch?.mission,
    isLoading: isLoading || isFetching,
    isError,
    handleGoHome,
  };
};
