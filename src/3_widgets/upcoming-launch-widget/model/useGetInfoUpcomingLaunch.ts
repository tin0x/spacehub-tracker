import { useGetUpcomingLaunchQuery } from '@entities/launch/api/launchApi.ts';

export const useGetInfoUpcomingLaunch = () => {
  const { data, isLoading, isFetching } = useGetUpcomingLaunchQuery();

  return {
    isEmpty: !data && !isLoading && !isFetching,
    video: data?.video,
    fallback: data?.fallback,
    heading: data?.heading,
    timer: data?.timer,
    mission: data?.mission,
  };
};
