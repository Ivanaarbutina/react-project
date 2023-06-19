import { NavLink } from "react-router-dom";

type SidebarProp = {
  isOpen: boolean;
};

const linkList: SidebarProp[] = [
  {
    path: "/progress-bar",
    label: "Progres Bar",
  },
];

const Sidebar = ({ isOpen }: SidebarProp) => {
  return <div className={`sidebar ${isOpen} ? "isActive" : ""`}>Sidebar</div>;
  <NavLink className="sidebar__link" to="/progress-bar">
    Progres Bar
  </NavLink>;
};

export default Sidebar;
