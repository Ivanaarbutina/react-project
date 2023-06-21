import { NavLink } from "react-router-dom";

type SidebarProp = {
  isOpen: boolean;
  onClose: () => void;
};

export type LinkType = {
  path:string;
  label:string;
}

const linkList: LinkType[] = [
  {
    path: "/progress-bar",
    label: "Progres Bar",
  },
  {
    path: "/loader",
    label: "Loader",
  }
];

const Sidebar = ({ isOpen, onClose}: SidebarProp) => {
  return (
  <div className={`sidebar ${isOpen ? "isActive" : ""}`}>
    {linkList.map((link) => {
      return(
        <div className="sidebar__link__wrapper">
          <NavLink 
            className="sidebar__link"
            onClick={onClose}
            to={link.path}>
            {link.label}
          </NavLink>
        </div>
      )
    })}
  </div>
  );
};

export default Sidebar;
