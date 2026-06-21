import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';
import type {
  CurrentLaunch,
  CurrentLaunchDTO,
  LaunchesPreview,
  LaunchesPreviewDTO,
  LaunchPreviewArgs,
  UpcomingLaunch,
  UpcomingLaunchDTO,
} from '@entities/launch/types.ts';
import { mapCurrentLaunch, mapLaunchPreview, mapUpcomingLaunch } from '@entities/launch/lib/mappers.ts';

const launchApi = baseSpaceDevsApi.injectEndpoints({
  endpoints: (build) => ({
    getLaunchesByNavigation: build.query<LaunchesPreview, LaunchPreviewArgs>({
      query: ({ offset, ordering, status, search }) => ({
        url: '/launches',
        params: {
          ordering,
          status,
          search,
          offset,
          limit: 10,
          mode: 'list',
        },
      }),
      transformResponse: (response: LaunchesPreviewDTO): LaunchesPreview => {
        const launches = response.results.map(mapLaunchPreview);
        return { count: response.count, launches };
      },
    }),
    getLaunchById: build.query({
      query: ({ launchId }) => ({
        url: `/launches/${launchId}`,
      }),
      transformResponse: (response: CurrentLaunchDTO): CurrentLaunch => {
        return mapCurrentLaunch(response);
      },
    }),
    getUpcomingLaunch: build.query<UpcomingLaunch[], void>({
      query: () => ({
        url: '/launches/upcoming',
        params: {
          limit: 5,
          mode: 'detailed',
        },
      }),
      transformResponse: (response: { results: UpcomingLaunchDTO[] }): UpcomingLaunch[] => {
        return response.results.map(mapUpcomingLaunch);
      },
    }),
  }),
});

export const { useGetLaunchesByNavigationQuery, useGetLaunchByIdQuery, useGetUpcomingLaunchQuery } = launchApi;
