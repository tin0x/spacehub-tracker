import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';
import type {
  CurrentLaunch,
  CurrentLaunchDTO,
  LaunchPreview,
  LaunchPreviewArgs,
  LaunchPreviewDTO,
} from '@entities/launch/types.ts';
import { mapCurrentLaunch, mapLaunchPreview } from '@entities/launch/lib/mappers.ts';

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
  }),
});

export const { useGetLaunchesByNavigationQuery, useGetLaunchByIdQuery } = launchApi;
