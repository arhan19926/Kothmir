import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../pages/home/home";
import Layout from "../pages/layout/layout";

const layoutRoutes = (Component: JSX.Element) => <Layout>{Component}</Layout>;

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: layoutRoutes(<Home />),
  },
]);

export default routes;
