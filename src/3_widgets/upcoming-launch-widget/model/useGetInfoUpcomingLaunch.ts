import { useGetUpcomingLaunchQuery } from '@entities/launch/api/launchApi.ts';

export const useGetInfoUpcomingLaunch = () => {
  const { data, isLoading, isFetching, isError } = useGetUpcomingLaunchQuery();

  return {
    isEmpty: !data && !isLoading && !isFetching,
    video: data?.video,
    fallback: data?.fallback,
    heading: data?.heading,
    timer: data?.timer,
    mission: data?.mission,
    isLoading: isLoading || isFetching,
    isError,
  };
};
