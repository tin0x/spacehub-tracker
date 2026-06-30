export type AgencyPreviewArgs = {
  limit: number;
  offset: number;
  ordering: string;
  typeId: number;
  search?: string;
};

export type AgencyPreviewDTO = {
  id: number;
  name: string;
  country: {
    alpha_3_code: string;
  }[];
  logo: {
    name: string;
    thumbnail_url: string;
  };
};

export type AgencyPreviewsDTO = {
  count: number;
  results: AgencyPreviewDTO[];
};

export type AgencyPreview = {
  id: number;
  name: string;
  country: string;
  logo: {
    name: string;
    url: string;
  };
};

export type AgencyPreviews = {
  count: number;
  results: AgencyPreview[];
};

export type CurrentAgencyArgs = {
  agencyId: number;
};

export type CurrentAgencyDTO = {
  name: string;
  type: {
    name: string;
  };
  country: {
    name: string;
  }[];
  description: string;
  administrator: string;
  launchers: string;
  founding_year: number;
  image: {
    image_url: string;
  };
  logo: {
    name: string;
    image_url: string;
  };
  total_launch_count: number;
  successful_launches: number;
  failed_launches: number;
  social_media_links: {
    social_media: {
      name: string;
      logo: {
        name: string;
        thumbnail_url: string;
      } | null;
      url: string;
    };
  }[];
};

export type CurrentAgency = {
  name: string;
  type: string;
  country: string;
  description: string;
  admin: string;
  launchers: string;
  foundingYear: string;
  image: string;
  logo: {
    name: string;
    url: string;
  };
  totalLaunchCount: number;
  successfulLaunches: number;
  failedLaunches: number;
};

// UI

export type AgencyPreviewItemProps = {
  id: number;
  name: string;
  country: string;
  imageUrl: string;
  imageAlt: string;
};

export type AgencyPreviewListProps = {
  agencies: AgencyPreview[];
};

export type AgencyDetailsCardProps = {
  agency: CurrentAgency;
};
