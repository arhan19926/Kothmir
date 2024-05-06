import Sidebar from "../../components/sidebar";
import "./layout.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: { children: any }) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="childWrapper"> {children}</div>
    </div>
  );
};

export default Layout;
