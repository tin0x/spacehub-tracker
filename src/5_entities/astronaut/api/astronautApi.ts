import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';
import type { AstronautArgs, AstronautPreview, AstronautPreviewDTO } from '@entities/astronaut/types.ts';
import { mapAstronautPreview } from '@entities/astronaut/lib/mappers.ts';

const astronautApi = baseSpaceDevsApi.injectEndpoints({
  endpoints: (build) => ({
    getAstronautsByNavigation: build.query<AstronautPreview[], AstronautArgs>({
      query: ({ limit, offset, ordering, hasFlown, nationality, search }) => ({
        url: '/astronauts',
        params: {
          limit,
          offset,
          ordering,
          has_flown: hasFlown,
          nationality,
          search,
        },
      }),
      transformResponse: (response: { results: AstronautPreviewDTO[] }): AstronautPreview[] => {
        return response.results.map(mapAstronautPreview);
      },
    }),
  }),
});

export const { useGetAstronautsByNavigationQuery } = astronautApi;
