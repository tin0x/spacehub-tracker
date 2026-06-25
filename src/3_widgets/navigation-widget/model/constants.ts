import type { NavigationData } from '@widgets/navigation-widget/types.ts';

export const navigationData: NavigationData = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Launches',
    link: '/launches?ordering=-last_updated&status=1&page=1',
  },
  {
    title: 'News',
    link: '/news?ordering=-published_at&page=1',
  },
  {
    title: 'Spacecrafts',
    link: '/spacecrafts?ordering=-flights_count&status=1&page=1',
  },
  {
    title: 'Astronauts',
    link: '/astronauts?ordering=--time_in_space&status_ids=1&page=1',
  },
  {
    title: 'Agencies',
    link: '/agencies?ordering=--total_launch_count&type__id=1&page=1',
  },
];
