import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header-bar">
        <a className="header-logo">
          Would you rather
        </a>
        <nav className="nav-bar">
          <Link to="/Play"className="header-nav">Play</Link>
          <a className="header-nav">Home</a>
          <Link to="/About"className="header-nav">About</Link>
          <a className="header-nav">Profile</a>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
export default Header;
