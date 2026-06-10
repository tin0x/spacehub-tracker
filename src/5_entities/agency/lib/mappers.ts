import type { AgencyPreview, AgencyPreviewDTO, CurrentAgency, CurrentAgencyDTO } from '@entities/agency/types.ts';

export const mapAgencyPreview = (dto: AgencyPreviewDTO): AgencyPreview => ({
  id: dto.id,
  name: dto.name,
  country: dto.country?.[0]?.alpha_3_code ?? 'unknown',
  logo: {
    name: dto.logo.name,
    url: dto.logo.thumbnail_url,
  },
});

export const mapCurrentAgency = (dto: CurrentAgencyDTO): CurrentAgency => ({
  id: dto.id,
  name: dto.name,
  type: dto.type.name,
  country: dto.country?.[0]?.alpha_3_code ?? 'unknown',
  description: dto.description,
  admin: dto.administrator,
  launchers: dto.launchers,
  image: dto.image.image_url,
  logo: {
    name: dto.logo.name,
    url: dto.logo.thumbnail_url,
  },
  totalLaunchCount: dto.total_launch_count,
  successfulLaunches: dto.successful_launches,
  failedLaunches: dto.failed_launches,
  socialLinks: dto.social_media_links.map((l) => ({
    name: l.social_media.name,
    url: l.social_media.url,
    logo: {
      name: l.social_media.logo?.name ?? null,
      url: l.social_media.logo?.name ?? null,
    },
  })),
});
