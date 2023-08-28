import { Link } from "react-router-dom";
import "../css/components/SideBarNav.css"
import logo from "../Images/logo.png"

const SideBarNav = () => {
    return (
        <>
            <aside className="sidebar">
                <nav className="sidebar-nav">
                    <div className="sidebar-nav-logo">
                        <Link className="sidebar-nav-logo-link" to={`/`}>
                            <img className="sidebar-nav-logo-img" src={logo} alt="loop cinema logo"/>
                        </Link>
                    </div>

                    <button className="sidebar-close-button"></button>
                    <div className="sidebar-search"></div>

                    <ul className="sidebar-nav-list sidebar-nav-list-primary">
                        <li className="sidebar-nav-list-item">
                            <Link className="sidebar-nav-list-item-link" to={`/`}>
                                <span className="sidebar-nav-list-item-text sidebar-nav-list-item-text-primary">Home</span>
                            </Link>
                        </li>
                        <li className="sidebar-nav-list-item">
                            <Link className="sidebar-nav-list-item-link" to={`/test`}>
                                <span className="sidebar-nav-list-item-text sidebar-nav-list-item-text-primary">Movies</span>
                            </Link>
                        </li>
                        <li className="sidebar-nav-list-item">
                            <Link className="sidebar-nav-list-item-link" to={`/`}>
                                <span className="sidebar-nav-list-item-text sidebar-nav-list-item-text-primary">Session Times</span>
                            </Link>
                        </li>
                        <li className="sidebar-nav-list-item">
                            <Link className="sidebar-nav-list-item-link" to={`/`}>
                                <span className="sidebar-nav-list-item-text sidebar-nav-list-item-text-primary">Cinemas</span>
                            </Link>
                        </li>
                        <li className="sidebar-nav-list-item">
                            <Link className="sidebar-nav-list-item-link" to={`/`}>
                                <span className="sidebar-nav-list-item-text sidebar-nav-list-item-text-primary">Events & Festivals</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="sidebar-nav-list sidebar-nav-list-secondary">
                        <li className="sidebar-nav-list-item">
                            <Link className="sidebar-nav-list-item-link" to={`/AboutUs`}>
                                <span className="sidebar-nav-list-item-text sidebar-nav-list-item-text-secondary">About us</span>
                            </Link>
                        </li>
                        <li className="sidebar-nav-list-item">
                            <Link className="sidebar-nav-list-item-link" to={`/`}>
                                <span className="sidebar-nav-list-item-text sidebar-nav-list-item-text-secondary">Gift Shop</span>
                            </Link>
                        </li>
                        <li className="sidebar-nav-list-item">
                            <Link className="sidebar-nav-list-item-link" to={`/`}>
                                <span className="sidebar-nav-list-item-text sidebar-nav-list-item-text-secondary">Experiences</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default SideBarNav