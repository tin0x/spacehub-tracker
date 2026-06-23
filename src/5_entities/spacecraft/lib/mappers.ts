import type {
  CurrentSpacecraft,
  CurrentSpacecraftDTO,
  SpacecraftPreview,
  SpacecraftPreviewDTO,
} from '@entities/spacecraft/types.ts';

export const mapSpacecraftPreview = (dto: SpacecraftPreviewDTO): SpacecraftPreview => ({
  id: dto.id,
  name: dto.name,
  agency: dto.spacecraft_config?.agency.name ?? 'unknown',
  image: {
    name: dto.image?.name ?? dto.name,
    url: dto.image?.thumbnail_url,
  },
});

export const mapCurrentSpacecraft = (dto: CurrentSpacecraftDTO): CurrentSpacecraft => ({
  id: dto.id,
  name: dto.name,
  image: {
    name: dto.image.name,
    url: dto.image.image_url,
  },
  config: {
    name: dto.spacecraft_config.name,
    type: dto.spacecraft_config.type.name,
    agency: dto.spacecraft_config.agency.name,
    capability: dto.spacecraft_config.capability,
    crewCapacity: dto.spacecraft_config.crew_capacity,
    maidenFlight: dto.spacecraft_config.maiden_flight,
    totalLaunchCount: dto.spacecraft_config.total_launch_count,
    successfulLandCount: dto.spacecraft_config.successful_landings,
    failedLaunchCount: dto.spacecraft_config.failed_launches,
    successfulLaunchCount: dto.spacecraft_config.successful_launches,
  },
  flightsCount: dto.flights_count,
  missionEndsCount: dto.mission_ends_count,
  status: dto.status.name,
  description: dto.description,
  inUse: dto.in_use,
});
