import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';
import type {
  AgencyPreviewArgs,
  AgencyPreviews,
  AgencyPreviewsDTO,
  CurrentAgency,
  CurrentAgencyArgs,
  CurrentAgencyDTO,
} from '@entities/agency/types.ts';
import { mapAgencyPreview, mapCurrentAgency } from '@entities/agency/lib/mappers.ts';

const agencyApi = baseSpaceDevsApi.injectEndpoints({
  endpoints: (build) => ({
    getAgenciesByNavigation: build.query<AgencyPreviews, AgencyPreviewArgs>({
      query: ({ limit, offset, ordering, search, typeId }) => ({
        url: '/agencies',
        params: {
          limit,
          offset,
          ordering,
          search,
          type__id: typeId,
          mode: 'normal',
        },
      }),
      transformResponse: (response: AgencyPreviewsDTO): AgencyPreviews => {
        const agencies = response.results.map(mapAgencyPreview);
        return { count: response.count, results: agencies };
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
