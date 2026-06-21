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
    link: '/news',
  },
  {
    title: 'Spacecrafts',
    link: '/spacecrafts',
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
