import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@app/layout/ui/Layout.tsx';
import HomePage from '@pages/home-page/ui/HomePage.tsx';
import NotFoundPage from '@pages/not-found-page/ui/NotFoundPage.tsx';
import LaunchesListPage from '@pages/launches-list-page/ui/LaunchesListPage.tsx';
import NewsPage from '@pages/news-page/ui/NewsPage.tsx';
import SpacecraftsPage from '@pages/spacecrafts-page/ui/SpacecraftsPage.tsx';
import AstronautsPage from '@pages/astronauts-page/ui/AstronautsPage.tsx';
import AgenciesPage from '@pages/agencies-page/ui/AgenciesPage.tsx';
import NewsDetailsPage from '@pages/news-details-page/ui/NewsDetailsPage.tsx';
import DetailsLaunchPage from '@pages/details-launch-page/ui/DetailsLaunchPage.tsx';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
        {
          path: 'launches',
          element: <LaunchesListPage />,
        },
        {
          path: 'launches/:id',
          element: <DetailsLaunchPage />,
        },
        {
          path: 'news',
          element: <NewsPage />,
        },
        {
          path: 'news/:id',
          element: <NewsDetailsPage />,
        },
        {
          path: 'spacecrafts',
          element: <SpacecraftsPage />,
        },
        {
          path: 'astronauts',
          element: <AstronautsPage />,
        },
        {
          path: 'agencies',
          element: <AgenciesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
