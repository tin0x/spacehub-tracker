import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';
import type {
  CurrentSpacecraft,
  CurrentSpacecraftArgs,
  CurrentSpacecraftDTO,
  SpacecraftPreview,
  SpacecraftPreviewArgs,
  SpacecraftPreviewDTO,
} from '@entities/spacecraft/types.ts';
import { mapCurrentSpacecraft, mapSpacecraftPreview } from '@entities/spacecraft/lib/mappers.ts';

const spacecraftApi = baseSpaceDevsApi.injectEndpoints({
  endpoints: (build) => ({
    getSpacecraftByNavigation: build.query<SpacecraftPreview[], SpacecraftPreviewArgs>({
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
      transformResponse: (response: { results: SpacecraftPreviewDTO[] }): SpacecraftPreview[] => {
        return response.results.map(mapSpacecraftPreview);
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
