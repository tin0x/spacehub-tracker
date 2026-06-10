export type AgencyPreviewArgs = {
  limit: number;
  offset: number;
  ordering: string;
  search?: string;
  typeId?: number;
};

export type AgencyPreviewDTO = {
  name: string;
  country: {
    alpha_3_code: string;
  }[];
  logo: {
    name: string;
    thumbnail_url: string;
  };
};

export type AgencyPreview = {
  name: string;
  country: string;
  logo: {
    name: string;
    url: string;
  };
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
    alpha_3_code: string;
  }[];
  description: string;
  administrator: string;
  launchers: string;
  image: {
    image_url: string;
  };
  logo: {
    name: string;
    thumbnail_url: string;
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
  image: string;
  logo: {
    name: string;
    url: string;
  };
  totalLaunchCount: number;
  successfulLaunches: number;
  failedLaunches: number;
  socialLinks: {
    name: string;
    url: string;
    logo: {
      name: string | null;
      url: string | null;
    };
  }[];
};
