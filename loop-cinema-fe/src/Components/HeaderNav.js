import { Link, Navigate, useNavigate } from "react-router-dom";
import "../css/components/HeaderNav.css"
import logo from "../Images/logo.png"
import LoginForm from "./LoginForm";
import { toggleModal } from "./Ultilities/OpenModal";
import { getCurrentUserId } from "../data/userRepo";
import { useEffect, useState } from "react";

const HeaderNav = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // everytime component mount -> set to true -> not good as the message will reappeared
    const [isTemporary, setIsTemporary] = useState(false);

    useEffect(() => {
        const userId = getCurrentUserId()
        if (userId === null) { 
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
            setIsTemporary(true)
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (isTemporary) {
            setTimeout(() => {
                setIsTemporary(false)
            }, 2000)
        }
    }, [isTemporary])

    const navigateMyAccount = () => {
        navigate("/account")
    }

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
                    {isLoggedIn ? (
                        <button className="header-profile-button" data-target="login-dialog" onClick={navigateMyAccount}>
                            {/* <img/> */}
                            <span className="header-profile-button-text">My Account</span>
                        </button>
                    ) : (    
                        <button className="header-profile-button" data-target="login-dialog" onClick={toggleModal}>
                            {/* <img/> */}
                            <span className="header-profile-button-text">Log In</span>
                        </button>
                    )}
                </div>
                {
                    isTemporary && (
                        <div className="header-alert-message">
                            <span>Login successfully</span>
                        </div>
                    )
                }
            </header>
            <LoginForm toggleModal={toggleModal} setIsLoggedIn={setIsLoggedIn} setIsTemporary={setIsTemporary} />
        </>
    )
}

export default HeaderNav;