import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../pages/home/home";
import Layout from "../pages/layout/layout";
import Recipes from "../pages/recipes/recipes";
import About from "../pages/about/about";
import Blogs from "../pages/blogs/blogs";

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default routes;
