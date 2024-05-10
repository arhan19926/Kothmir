import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import "./layout.css";
import { validateUser } from "../../utils/constants/genericAPIs";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    validateUser();
  }, [location]);

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="childWrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
