import { Link } from "react-router-dom";
import "../css/components/HeaderNav.css"
import logo from "../Images/logo.png"

const HeaderNav = () => {
    return (
        <>
            <header>
                <div className="header-hamburger"></div>
                <Link className="header-logo-link" to={`/`}>
                    <img className="header-logo-img" src={logo} alt="loop cinema logo"/>
                </Link>

                <div className="header-search">
                    {/* <button className="header-search-button-search">
                        <img className="header-search-icon" src={logo} alt="search icon"/>
                    </button> */}
                    {/* <button className="header-search-button-clear">Clear</button> */}
                    <input className="header-search-input" type="search" id="search" name="search" placeholder="Search movies..."/>
                </div>
                <div className="header-profile">
                    <button className="header-profile-button">
                        {/* <img/> */}
                        <span className="header-profile-button-text">Log In</span>
                    </button>
                </div>
            </header>
        </>
    )
}

export default HeaderNav;