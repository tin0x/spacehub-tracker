import type { AstronautPreview, AstronautPreviewDTO } from '@entities/astronaut/types.ts';

export const mapAstronautPreview = (dto: AstronautPreviewDTO): AstronautPreview => ({
  id: dto.id,
  name: dto.name,
  image: {
    alt: dto.image.name,
    url: dto.image.thumbnail_url,
  },
  agency: {
    id: dto.agency.id,
    shortName: dto.agency.abbrev,
  },
});
