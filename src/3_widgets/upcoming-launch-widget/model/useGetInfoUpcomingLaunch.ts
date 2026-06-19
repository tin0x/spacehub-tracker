import { useGetUpcomingLaunchQuery } from '@entities/launch/api/launchApi.ts';
import { useNavigate } from 'react-router-dom';

export const useGetInfoUpcomingLaunch = () => {
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
