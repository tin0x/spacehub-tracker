export type AstronautPreviewDTO = {
  id: number;
  name: string;
  image: {
    name: string;
    thumbnail_url: string;
  };
  agency: {
    id: number;
    abbrev: string;
  };
};

type TypesOrdering =
  | 'age'
  | '-age'
  | 'last_flight'
  | '-last_flight'
  | 'name'
  | '-name'
  | 'spacewalks_count'
  | '-spacewalks_count';

export type AstronautArgs = {
  limit: number;
  offset: number;

  // SORTING
  ordering: TypesOrdering;

  // FILTERS
  hasFlown?: boolean;
  nationality?: string;

  // SEARCH
  search?: string;
};

export type AstronautPreview = {
  id: number;
  name: string;
  image: {
    alt: string;
    url: string;
  };
  agency: {
    id: number;
    shortName: string;
  };
};
