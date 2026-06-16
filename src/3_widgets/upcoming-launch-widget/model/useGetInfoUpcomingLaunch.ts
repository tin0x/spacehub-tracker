import { useGetUpcomingLaunchQuery } from '@entities/launch/api/launchApi.ts';

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

  return {
    isEmpty: !futureLaunch && !isLoading && !isFetching,
    video: futureLaunch?.video,
    fallback: futureLaunch?.fallback,
    heading: futureLaunch?.heading,
    timer: futureLaunch?.timer,
    mission: futureLaunch?.mission,
    isLoading: isLoading || isFetching,
    isError,
  };
};
