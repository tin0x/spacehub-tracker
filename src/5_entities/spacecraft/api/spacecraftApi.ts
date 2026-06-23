import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';
import type {
  CurrentSpacecraft,
  CurrentSpacecraftArgs,
  CurrentSpacecraftDTO,
  SpacecraftPreviewArgs,
  SpacecraftPreviews,
  SpacecraftPreviewsDTO,
} from '@entities/spacecraft/types.ts';
import { mapCurrentSpacecraft, mapSpacecraftPreview } from '@entities/spacecraft/lib/mappers.ts';

const spacecraftApi = baseSpaceDevsApi.injectEndpoints({
  endpoints: (build) => ({
    getSpacecraftByNavigation: build.query<SpacecraftPreviews, SpacecraftPreviewArgs>({
      query: ({ limit, offset, status, ordering, search }) => ({
        url: '/spacecraft',
        params: {
          limit,
          offset,
          status,
          ordering,
          search,
          is_placeholder: false,
          mode: 'normal',
        },
      }),
      transformResponse: (response: SpacecraftPreviewsDTO): SpacecraftPreviews => {
        const spacecrafts = response.results.map(mapSpacecraftPreview);
        return { count: response.count, results: spacecrafts };
      },
    }),
    getSpacecraftById: build.query<CurrentSpacecraft, CurrentSpacecraftArgs>({
      query: ({ spacecraftId }) => ({
        url: `/spacecraft/${spacecraftId}`,
      }),
      transformResponse: (response: CurrentSpacecraftDTO): CurrentSpacecraft => {
        return mapCurrentSpacecraft(response);
      },
    }),
  }),
});

export const { useGetSpacecraftByNavigationQuery, useGetSpacecraftByIdQuery } = spacecraftApi;
