
const Header = () => {

  return(
    <header className="header">
    <h1 className="header__title">My web page</h1>
    <nav className="header__nav">
      <ul className="header__menu">
        <li className="header__menu-item"><a href="/">Home</a></li>
        <li className="header__menu-item"><a href="/exercise">Exercise</a></li>
        <li className="header__menu-item"><a href="/components">Components</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header;