import type { Astronaut, AstronautDTO, AstronautPreview, AstronautPreviewDTO } from '@entities/astronaut/types.ts';

export const mapAstronautPreview = (dto: AstronautPreviewDTO): AstronautPreview => ({
  id: dto.id,
  name: dto.name,
  image: {
    alt: dto.image.name,
    url: dto.image.thumbnail_url,
  },
  agency: {
    shortName: dto.agency.abbrev,
  },
});

export const mapAstronaut = (dto: AstronautDTO): Astronaut => ({
  id: dto.id,
  name: dto.name,
  status: dto.status.name,
  image: {
    alt: dto.image.name,
    url: dto.image.image_url,
  },
  agency: {
    id: dto.agency.id,
    name: dto.agency.name,
    type: dto.agency.type.name,
  },
  age: dto.age,
  dateBirth: dto.date_of_birth,
  dateDeath: dto.date_of_death,
  nationality: dto.nationality?.map((n) => n.nationality_name) ?? [],
  bio: dto.bio,
  lastFlight: dto.last_flight,
  firstFlight: dto.first_flight,
  socialLinks:
    dto.social_media_links?.map((link) => ({
      name: link.social_media.name,
      url: link.url,
    })) ?? [],
  flights:
    dto.flights?.map((f) => ({
      name: f.mission.name,
      description: f.mission.description,
    })) ?? [],
});
