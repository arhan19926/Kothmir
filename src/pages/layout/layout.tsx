import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import "./layout.css";
import { validateUser } from "../../utils/constants/genericAPIs";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    async function validateSession() {
      try {
        const response = await validateUser();
        return response?.data;
      } catch (error) {
        navigate("/");
      }
    }
    validateSession();
  }, [location, navigate]);

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
