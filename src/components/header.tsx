import { NavLink } from "react-router-dom";
import { LinkType } from "./sidebar";

type HeaderProps = {
  toggleSidebar: () => void;
  onClose:() => void;
};

const headerLinks: LinkType[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const Header = ({ toggleSidebar, onClose }: HeaderProps) => {
  return (
    <div className="header__wrapper">
     <header className="header">
        <h1 className="header__title">My web page</h1>
        <div className="header__section" >
          <span className="material-symbols-outlined" onClick={toggleSidebar}>rocket_launch</span>
          <nav className="header__section__nav">
          {headerLinks.map((link) => {
              return (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  onClick={onClose} 
                  className="header__menu-item">
                  {link.label}
                </NavLink>
                );
              })}
          </nav>
        </div>
      </header>
    </div>
   
  );
};

export default Header;
