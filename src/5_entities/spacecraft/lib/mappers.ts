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
  basicInfo: {
    name: dto.name,
    flightsCount: dto.flights_count ?? 0,
    missionEndsCount: dto.mission_ends_count ?? 0,
    status: dto.status?.name ?? 'unknown',
    description: dto?.description ?? 'unknown',
    inUse: typeof dto.in_use === 'boolean' ? (dto.in_use ? 'Yes' : 'No') : 'unknown',
    image: {
      name: dto.image?.name ?? dto.name,
      url: dto.image?.image_url,
    },
  },
  config: {
    name: dto.spacecraft_config?.name ?? 'unknown',
    type: dto.spacecraft_config?.type?.name ?? 'unknown',
    agency: dto.spacecraft_config?.agency?.name ?? 'unknown',
    capability: dto.spacecraft_config?.capability ?? 'unknown',
    crewCapacity: dto.spacecraft_config?.crew_capacity ?? 0,
    maidenFlight: dto.spacecraft_config?.maiden_flight ?? 'unknown',
    totalLaunchCount: dto.spacecraft_config?.total_launch_count ?? 0,
    failedLaunchCount: dto.spacecraft_config?.failed_launches ?? 0,
    successfulLaunchCount: dto.spacecraft_config?.successful_launches ?? 0,
  },
});
