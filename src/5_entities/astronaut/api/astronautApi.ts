import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';
import type {
  Astronaut,
  AstronautArgs,
  AstronautDTO,
  AstronautPreview,
  AstronautPreviewArgs,
  AstronautPreviewDTO,
} from '@entities/astronaut/types.ts';
import { mapAstronaut, mapAstronautPreview } from '@entities/astronaut/lib/mappers.ts';

const astronautApi = baseSpaceDevsApi.injectEndpoints({
  endpoints: (build) => ({
    getAstronautsByNavigation: build.query<AstronautPreview[], AstronautPreviewArgs>({
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
    getAstronautById: build.query<Astronaut, AstronautArgs>({
      query: ({ astronautId }) => ({
        url: `/astronauts/${astronautId}`,
      }),
      transformResponse: (response: AstronautDTO): Astronaut => {
        return mapAstronaut(response);
      },
    }),
  }),
});

export const { useGetAstronautsByNavigationQuery } = astronautApi;
