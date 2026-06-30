export type SpacecraftPreviewArgs = {
  limit: number;
  offset: number;
  status: number;
  ordering: string;
  search?: string;
};

export type SpacecraftPreviewsDTO = {
  count: number;
  results: SpacecraftPreviewDTO[];
};

export type SpacecraftPreviewDTO = {
  id: number;
  name: string;
  image: {
    name: string;
    thumbnail_url: string;
  };
  spacecraft_config: {
    agency: {
      name: string;
    };
  };
};

export type SpacecraftPreviews = {
  count: number;
  results: SpacecraftPreview[];
};

export type SpacecraftPreview = {
  id: number;
  name: string;
  agency: string;
  image: {
    name: string;
    url: string;
  };
};

export type CurrentSpacecraftArgs = {
  spacecraftId: string;
};

export type CurrentSpacecraftDTO = {
  id: number;
  name: string;
  image: {
    name: string;
    image_url: string;
  };
  spacecraft_config: {
    name: string;
    type: {
      name: string;
    };
    agency: {
      id: number;
      name: string;
    };
    capability: string;
    crew_capacity: number;
    maiden_flight: string;
    total_launch_count: number;
    successful_launches: number;
    failed_launches: number;
  };
  flights_count: number;
  mission_ends_count: number;
  status: {
    name: string;
  };
  description: string;
  in_use: boolean;
};

export type CurrentSpacecraft = {
  basicInfo: {
    name: string;
    flightsCount: number;
    missionEndsCount: number;
    status: string;
    description: string;
    inUse: string;
    image: {
      name: string;
      url: string;
    };
  };
  config: {
    name: string;
    type: string;
    agency: {
      id: number;
      name: string;
    };
    capability: string;
    crewCapacity: number;
    maidenFlight: string;
    totalLaunchCount: number;
    successfulLaunchCount: number;
    failedLaunchCount: number;
  };
};

// UI

export type SpacecraftPreviewItemProps = {
  imageUrl: string;
  imageAlt: string;
} & Omit<SpacecraftPreview, 'image'>;

export type SpacecraftPreviewListProps = {
  spacecrafts: SpacecraftPreview[];
};

export type SpacecraftDetailsCardProps = {
  spacecraft: CurrentSpacecraft;
};
