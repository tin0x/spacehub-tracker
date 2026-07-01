import type { Astronaut, AstronautDTO, AstronautPreview, AstronautPreviewDTO } from '@entities/astronaut/types.ts';

export const mapAstronautPreview = (dto: AstronautPreviewDTO): AstronautPreview => ({
  id: dto.id,
  name: dto?.name || 'unknown',
  image: {
    alt: dto.image?.name ?? dto?.name ?? 'unknown',
    url: dto.image?.thumbnail_url,
  },
  agency: {
    shortName: dto?.agency?.abbrev ?? 'unknown',
  },
});

export const mapAstronaut = (dto: AstronautDTO): Astronaut => ({
  basicInfo: {
    name: dto.name,
    status: dto.status.name,
    age: dto?.age ?? 'unknown',
    dateBirth: dto.date_of_birth,
    dateDeath: dto?.date_of_death,
    nationality: dto.nationality?.[0]?.nationality_name,
    bio: dto.bio,
    image: {
      alt: dto.image?.name ?? dto.name,
      url: dto.image?.image_url,
    },
  },
  careerInfo: {
    agency: {
      id: dto.agency.id,
      name: dto.agency.name,
      type: dto.agency.type.name,
    },
    lastFlight: dto.last_flight,
    firstFlight: dto.first_flight,
  },
});
