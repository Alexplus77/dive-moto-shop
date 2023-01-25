import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { CatalogCategoryPage } from "./Pages/CatalogCategoryPage";
import App from "./App";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/category/:name",
        element: <CatalogCategoryPage />,
      },
    ],
  },
]);
