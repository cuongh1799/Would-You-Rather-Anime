import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [logInState, setLogInState] = useState(false);

  // Check Token
  useEffect(() => {
    const checkToken = localStorage.getItem("token");
    if (!checkToken || checkToken === undefined) {
      setLogInState(false);
    } else setLogInState(true);
  }, []);

  return (
    <>
      <header className="header-bar">
        <a className="header-logo">Would you rather</a>
        <nav className="nav-bar">
          <Link to="/Play" className="header-nav">
            Play
          </Link>
          <Link to="/" className="header-nav">
            Home
          </Link>
          {logInState ? (
            <Link to="/login" className="header-login">
              <div className="header-login-content">Yep</div>
            </Link>
          ) : (
            <Link to="/login" className="header-login">
              <div className="header-login-content">Login</div>
            </Link>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
}
export default Header;
