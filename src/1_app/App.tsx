import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@app/layout/ui/Layout.tsx";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
