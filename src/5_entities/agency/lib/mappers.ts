import type { AgencyPreview, AgencyPreviewDTO, CurrentAgency, CurrentAgencyDTO } from '@entities/agency/types.ts';

export const mapAgencyPreview = (dto: AgencyPreviewDTO): AgencyPreview => ({
  id: dto.id,
  name: dto?.name ?? 'unknown',
  country: dto.country?.[0]?.alpha_3_code ?? 'unknown',
  logo: {
    name: dto.logo?.name ?? dto?.name ?? 'unknown',
    url: dto.logo?.thumbnail_url,
  },
});

export const mapCurrentAgency = (dto: CurrentAgencyDTO): CurrentAgency => ({
  name: dto.name,
  type: dto.type.name,
  country: dto.country?.[0]?.name ?? 'unknown',
  description: dto.description,
  admin: dto?.administrator ?? 'unknown',
  launchers: dto?.launchers || 'unknown',
  foundingYear: dto?.founding_year ? dto?.founding_year.toString() : 'unknown',
  image: dto.image?.image_url,
  logo: {
    name: dto?.logo?.name ?? dto?.name ?? 'unknown',
    url: dto?.logo?.image_url,
  },
  totalLaunchCount: dto.total_launch_count ?? 0,
  successfulLaunches: dto.successful_launches ?? 0,
  failedLaunches: dto.failed_launches ?? 0,
});
