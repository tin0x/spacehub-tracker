import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';
import type {
  Astronaut,
  AstronautArgs,
  AstronautDTO,
  AstronautPreviewArgs,
  AstronautPreviews,
  AstronautPreviewsDTO,
} from '@entities/astronaut/types.ts';
import { mapAstronaut, mapAstronautPreview } from '@entities/astronaut/lib/mappers.ts';

const astronautApi = baseSpaceDevsApi.injectEndpoints({
  endpoints: (build) => ({
    getAstronautsByNavigation: build.query<AstronautPreviews, AstronautPreviewArgs>({
      query: ({ limit, offset, ordering, statusIds, search }) => ({
        url: '/astronauts',
        params: {
          limit,
          offset,
          ordering,
          status_ids: statusIds,
          search,
          mode: 'list',
        },
      }),
      transformResponse: (response: AstronautPreviewsDTO): AstronautPreviews => {
        const astronauts = response.results.map(mapAstronautPreview);
        return { count: response.count, results: astronauts };
      },
    }),
    getAstronautById: build.query<Astronaut, AstronautArgs>({
      query: ({ astronautId }) => ({
        url: `/astronauts/${astronautId}`,
        params: {
          mode: 'normal',
        },
      }),
      transformResponse: (response: AstronautDTO): Astronaut => {
        return mapAstronaut(response);
      },
    }),
  }),
});

export const { useGetAstronautsByNavigationQuery, useGetAstronautByIdQuery } = astronautApi;
