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
          <Link to="/"className="header-nav">Home</Link>
          <span className="header-login">
            <div className="header-login-content">Log in</div>
          </span>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
export default Header;
