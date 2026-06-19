export type SpacecraftPreviewArgs = {
  limit: number;
  offset: number;
  status: number;
  ordering: string;
  search?: string;
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
  spacecraftId: number;
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
      name: string;
    };
    capability: string;
    crew_capacity: number;
    maiden_flight: string;
    total_launch_count: number;
    successful_launches: number;
    failed_launches: number;
    successful_landings: number;
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
  id: number;
  name: string;
  image: {
    name: string;
    url: string;
  };
  config: {
    name: string;
    type: string;
    agency: string;
    capability: string;
    crewCapacity: number;
    maidenFlight: string;
    totalLaunchCount: number;
    successfulLaunchCount: number;
    failedLaunchCount: number;
    successfulLandCount: number;
  };
  flightsCount: number;
  missionEndsCount: number;
  status: string;
  description: string;
  inUse: boolean;
};
