import type { PagesKeys, PagesValues } from '@widgets/content-filter-widget/types.ts';

export const dataToFilter: Record<PagesKeys, PagesValues> = {
  launches: {
    sortParam: 'ordering',
    selectors: [
      {
        label: 'recents',
        value: '-last_updated',
      },
      {
        label: 'oldest',
        value: 'last_updated',
      },
      {
        label: 'a-z',
        value: '-name',
      },
      {
        label: 'z-a',
        value: 'name',
      },
    ],
    radios: {
      radioParam: 'status',
      options: [
        {
          label: 'go for launch',
          value: '1',
        },
        {
          label: 'to be determined',
          value: '2',
        },
        {
          label: 'launch successful',
          value: '3',
        },
        {
          label: 'launch failure',
          value: '4',
        },
      ],
    },
  },
  news: {
    sortParam: 'ordering',
    selectors: [
      {
        label: 'recents',
        value: '-published_at',
      },
      {
        label: 'oldest',
        value: 'published_at',
      },
    ],
  },
  spacecrafts: {
    sortParam: 'ordering',
    selectors: [
      {
        label: 'many flights',
        value: '-flights_count',
      },
      {
        label: 'few flights',
        value: 'flights_count',
      },
    ],
    radios: {
      radioParam: 'status',
      options: [
        {
          label: 'active',
          value: '1',
        },
        {
          label: 'retired',
          value: '2',
        },
        {
          label: 'destroyed',
          value: '3',
        },
        {
          label: 'single use',
          value: '4',
        },
      ],
    },
  },
  astronauts: {
    sortParam: 'ordering',
    selectors: [
      {
        label: 'longest time in space',
        value: '-time_in_space',
      },
      {
        label: 'shortest time in space',
        value: 'time_in_space',
      },
      {
        label: 'most flights',
        value: '-flights_count',
      },
      {
        label: 'fewest flights',
        value: 'flights_count',
      },
    ],
    radios: {
      radioParam: 'status_ids',
      options: [
        {
          label: 'active astronauts',
          value: '1',
        },
        {
          label: 'retired legends',
          value: '2',
        },
      ],
    },
  },
  agencies: {
    sortParam: 'ordering',
    selectors: [
      {
        label: 'most launches',
        value: '-total_launch_count',
      },
      {
        label: 'least launches',
        value: 'total_launch_count',
      },
      {
        label: 'a-z',
        value: 'name',
      },
      {
        label: 'z-a',
        value: '-name',
      },
    ],
    radios: {
      radioParam: 'type__id',
      options: [
        {
          label: 'government',
          value: '1',
        },
        {
          label: 'multinational',
          value: '2',
        },
        {
          label: 'commercial',
          value: '3',
        },
        {
          label: 'educational',
          value: '4',
        },
        {
          label: 'private',
          value: '5',
        },
      ],
    },
  },
} as const;
