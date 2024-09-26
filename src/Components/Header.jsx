import '../CSS/Header-css.css'

function Header(){
    return(
        <header className="header-bar">
            <a className="header-logo">Would you rather</a>
            <nav className="nav-bar">
                <a className="header-nav">Home</a>
                <a className="header-nav">About</a>
                <a className="header-nav">Profile</a>
            </nav>
        </header>
    )
}
export default Header