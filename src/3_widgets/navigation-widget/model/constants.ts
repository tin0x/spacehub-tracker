import type { NavigationData } from '@widgets/navigation-widget/types.ts';

export const navigationData: NavigationData = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Launches',
    link: '/launches?ordering=-last_updated&status=1&mode=list&page=1',
  },
  {
    title: 'News',
    link: '/news?ordering=-published_at&page=1',
  },
  {
    title: 'Spacecrafts',
    link: '/spacecrafts?ordering=-flights_count&status=1&mode=normal&page=1',
  },
  {
    title: 'Astronauts',
    link: '/stronauts',
  },
  {
    title: 'Agencies',
    link: '/agencies',
  },
];
