import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../pages/home/home";
import Layout from "../pages/layout/layout";
import Recipes from "../pages/recipes/recipes";

// const layoutRoutes = (Component: JSX.Element) => <Layout>{Component}</Layout>;

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        // index: true,
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
    ],
  },
]);

export default routes;
