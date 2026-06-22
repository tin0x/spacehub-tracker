import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@app/layout/ui/Layout.tsx';
import HomePage from '@pages/home-page/ui/HomePage.tsx';
import NotFoundPage from '@pages/not-found-page/ui/NotFoundPage.tsx';
import LaunchesPage from '@pages/launches-page/ui/LaunchesPage.tsx';
import NewsPage from '@pages/news-page/ui/NewsPage.tsx';

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
          element: <LaunchesPage />,
        },
        {
          path: 'news',
          element: <NewsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
