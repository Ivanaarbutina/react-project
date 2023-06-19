import { NavLink } from "react-router-dom";

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="header__title">My web page</h1>
      <div className="header__section">
        <span className="material-symbols-outlined">rocket_launch</span>
        <img onClick={toggleSidebar} />
        <nav className="header__section__nav">
          <NavLink to="/" className="header__menu-item">
            Home
          </NavLink>
          <NavLink to="/contact" className="header__menu-item">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
