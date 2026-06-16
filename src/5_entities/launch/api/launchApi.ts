import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';
import type {
  CurrentLaunch,
  CurrentLaunchDTO,
  LaunchPreview,
  LaunchPreviewArgs,
  LaunchPreviewDTO,
  UpcomingLaunch,
  UpcomingLaunchDTO,
} from '@entities/launch/types.ts';
import { mapCurrentLaunch, mapLaunchPreview, mapUpcomingLaunch } from '@entities/launch/lib/mappers.ts';

const launchApi = baseSpaceDevsApi.injectEndpoints({
  endpoints: (build) => ({
    getLaunchesByNavigation: build.query<LaunchPreview[], LaunchPreviewArgs>({
      query: ({ limit, offset, ordering, status, search }) => ({
        url: '/launches',
        params: {
          limit,
          offset,
          ordering,
          status,
          search,
          mode: 'list',
        },
      }),
      transformResponse: (response: { results: LaunchPreviewDTO[] }): LaunchPreview[] => {
        return response.results.map(mapLaunchPreview);
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
