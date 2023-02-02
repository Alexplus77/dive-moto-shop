import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { CatalogCategoryPage } from "./Pages/CatalogCategoryPage";
import { CardProductPage } from "./Pages/CardProductPage";
import { LocationTest } from "./HOC/locationTest";
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
        element: (
          <LocationTest>
            <CatalogCategoryPage />
          </LocationTest>
        ),
      },
      {
        path: "/product/:name",
        element: (
          <LocationTest>
            <CardProductPage />
          </LocationTest>
        ),
      },
    ],
  },
]);
