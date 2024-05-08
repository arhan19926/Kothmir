import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import "./layout.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = () => {
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
