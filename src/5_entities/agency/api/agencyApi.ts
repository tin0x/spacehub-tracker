import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';
import type {
  AgencyPreview,
  AgencyPreviewArgs,
  AgencyPreviewDTO,
  CurrentAgency,
  CurrentAgencyArgs,
  CurrentAgencyDTO,
} from '@entities/agency/types.ts';
import { mapAgencyPreview, mapCurrentAgency } from '@entities/agency/lib/mappers.ts';

const agencyApi = baseSpaceDevsApi.injectEndpoints({
  endpoints: (build) => ({
    getAgenciesByNavigation: build.query<AgencyPreview[], AgencyPreviewArgs>({
      query: ({ limit, offset, ordering, search, typeId }) => ({
        url: '/agencies',
        params: {
          limit,
          offset,
          ordering,
          search,
          type__id: typeId,
          featured: 'true',
          mode: 'normal',
        },
      }),
      transformResponse: (response: { results: AgencyPreviewDTO[] }): AgencyPreview[] => {
        return response.results.map(mapAgencyPreview);
      },
    }),
    getAgencyById: build.query<CurrentAgency, CurrentAgencyArgs>({
      query: ({ agencyId }) => ({
        url: `/agencies/${agencyId}`,
      }),
      transformResponse: (response: CurrentAgencyDTO): CurrentAgency => {
        return mapCurrentAgency(response);
      },
    }),
  }),
});

export const { useGetAgenciesByNavigationQuery, useGetAgencyByIdQuery } = agencyApi;
