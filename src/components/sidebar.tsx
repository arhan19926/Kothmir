import { Link } from "react-router-dom";
import "./css/sidebar.css";
const Sidebar = () => {
  return (
    <ul className="sidebarWrapper">
      <Link to={'/home'}>Home</Link>
      <Link to={'/recipes'}>Recipes</Link>
      <Link to={'/blogs'}>Blogs</Link>
      <Link to={'/about'}>About</Link>
    </ul>
  );
};

export default Sidebar;
