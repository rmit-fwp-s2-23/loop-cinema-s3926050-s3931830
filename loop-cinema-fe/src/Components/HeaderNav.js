import { Link } from "react-router-dom";
import "../css/components/HeaderNav.css"
import logo from "../Images/logo.png"
import LoginForm from "./LoginForm";
import { toggleModal } from "./Ultilities/OpenModal";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

const HeaderNav = (props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const navigateMyAccount = () => {
        toggleAccountMenu()
        props.navigateMyAccount()
    }

    const navigateMyAccountProfile = () => {
        toggleAccountMenu()
        props.navigateMyAccountProfile()
    }

    const navigateMyAccountActivity = () => {
        toggleAccountMenu()
        props.navigateMyAccountActivity()
    }

    const navigateMyAccountReservation = () => {
        toggleAccountMenu()
        props.navigateMyAccountReservation()
    }

    // open or close my account menu
    const toggleAccountMenu = () => {
        setIsOpenMenu(prev => !prev)
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
                    {props.isLoggedIn 
                    ? (
                        <>
                            {/* https://picocss.com/docs/dropdowns.html consider this option for hover */}
                            <button className="header-profile-button" data-target="login-dialog" 
                            onClick={toggleAccountMenu}>
                                {/* <span className="header-profile-button-text"> */}
                                    <img src={process.env.PUBLIC_URL + '/Images/profile.png'} className="header-profile-button-icon"/>
                                {/* </span> */}
                            </button>
                            <div id="header-profile-button-hover-block" 
                            className={isOpenMenu ? 'header-profile-button-hover-block-open' 
                            : 'header-profile-button-hover-block-close'}>
                                <div className="header-profile-button-hover-block-item">
                                    <button className="header-profile-button-hover-block-item-button" onClick={navigateMyAccount}>
                                        <span className="header-profile-button-hover-block-item-text">My Dashboard</span>
                                    </button>
                                </div>
                                <div className="header-profile-button-hover-block-item">
                                    <button className="header-profile-button-hover-block-item-button" onClick={navigateMyAccountProfile}>
                                        <span className="header-profile-button-hover-block-item-text">My Profile</span>
                                    </button>
                                </div>
                                <div className="header-profile-button-hover-block-item">
                                    <button className="header-profile-button-hover-block-item-button" onClick={navigateMyAccountActivity}>
                                        <span className="header-profile-button-hover-block-item-text">My Activity</span>
                                    </button>
                                </div>
                                <div className="header-profile-button-hover-block-item">
                                    <button className="header-profile-button-hover-block-item-button" onClick={navigateMyAccountReservation}>
                                        <span className="header-profile-button-hover-block-item-text">My Reservation</span>
                                    </button>
                                </div>
                                <div className="header-profile-button-hover-block-item">
                                    <button className="header-profile-button-hover-block-item-button" onClick={props.signOut}>
                                        <span className="header-profile-button-hover-block-item-text">Sign Out</span>
                                    </button>
                                </div>
                            </div>
                            <div id="triangle-up" className={isOpenMenu ? 'header-profile-button-hover-block-open' 
                            : 'header-profile-button-hover-block-close'}></div>
                        </>
                    ) : (    
                        <>
                            <button className="header-profile-button" data-target="login-dialog" onClick={toggleModal}>
                                <span className="header-profile-button-text">Log In</span>
                            </button>
                            <button className="header-profile-button" data-target="register-dialog" onClick={toggleModal}>
                                <span className="header-profile-button-text">Register</span>
                            </button>
                        </>
                    )}
                </div>
                {
                    props.isTemporaryMessage && (
                        <div className="header-alert-message">
                            <span>Login successfully!</span>
                        </div>
                    )
                }
                {
                    props.isTemporaryMessageLogOut && (
                        <div className="header-alert-message">
                            <span>Sign out successfully!</span>
                        </div>
                    )
                }
                {
                    props.isTemporaryMessageDeleteUser && (
                        <div className="header-alert-message">
                            <span>Delete user successfully!</span>
                        </div>
                    )
                }
                {
                    props.isTemporaryMessageUpdateUser && (
                        <div className="header-alert-message">
                            <span>Update user successfully!</span>
                        </div>
                    )
                }
                {
                    props.isTemporaryMessageNewReview && (
                        <div className="header-alert-message">
                            <span>Post new comment successfully!</span>
                        </div>
                    )
                }
                {
                    props.isTemporaryMessageDeleteReview && (
                        <div className="header-alert-message">
                            <span>Delete comment successfully!</span>
                        </div>
                    )
                }
                {
                    props.isTemporaryMessageUpdateReview && (
                        <div className="header-alert-message">
                            <span>Update comment successfully!</span>
                        </div>
                    )
                }
            </header>
            <LoginForm toggleModal={toggleModal} setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn} />
            <RegisterForm  toggleModal={toggleModal} setIsLoggedIn={props.setIsLoggedIn} />
        </>
    )
}

export default HeaderNav;