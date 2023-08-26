import { Route, Routes, useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Home from "../Pages/Home";
import "../css/components/MainContent.css"
import MyAccount from "../Pages/MyAccount"
import Test from "./Test";
import { deleteUserByUserId, getCurrentUserId, removeCurrentUserId } from "../data/userRepo";
import { useState, useEffect } from "react";
import MyAccountCardItem from "./Fragments/MyAccountCardItem";
import Movie from "../Pages/Movie"
import MyAccountProfile from '../Pages/MyAccountProfile'
const MainContent = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // reload page got the login successfully message
    const [isTemporaryMessage, setIsTemporaryMessage] = useState(false);
    const [isTemporaryMessageLogOut, setIsTemporaryMessageLogOut] = useState(false)
    const [isTemporaryMessageDeleteUser, setIsTemporaryMessageDeleteUser] = useState(false)

    useEffect(() => {
        const userId = getCurrentUserId()
        if (userId === null) { 
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
            setIsTemporaryMessage(true)
            setTimeout(() => {
                setIsTemporaryMessage(false)
            }, 2000)
        }
    }, [isLoggedIn])

    // useEffect(() => {
    //     if (isTemporaryMessage !== false) {
    //         setTimeout(() => {
    //             setIsTemporaryMessage(false)
    //         }, 2000)
    //     }
    // }, [isTemporaryMessage])
    
    const signOut = () => {
        if (isLoggedIn) {
            removeCurrentUserId()
            setIsLoggedIn(false)

            setIsTemporaryMessageLogOut(true)
            setTimeout(() => {
                setIsTemporaryMessageLogOut(false)
            }, 2000)

            navigate("/")
        }
    }

    const deleteUser = () => {
        deleteUserByUserId(getCurrentUserId())
        setIsLoggedIn(false)

        setIsTemporaryMessageDeleteUser(true)
            setTimeout(() => {
                setIsTemporaryMessageDeleteUser(false)
            }, 2000)
    }

    const navigateMyAccount = () => {
        navigate("/account")
    }

    const navigateMyAccountProfile = () => {
        navigate("/account/profile")
    }

    return (
        <>
            <div className="main-content">
                <HeaderNav setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} 
                setIsTemporaryMessage={setIsTemporaryMessage} isTemporaryMessage={isTemporaryMessage} signOut={signOut} 
                isTemporaryMessageLogOut={isTemporaryMessageLogOut} 
                navigateMyAccount={navigateMyAccount} navigateMyAccountProfile={navigateMyAccountProfile} 
                isTemporaryMessageDeleteUser={isTemporaryMessageDeleteUser} />
                <Routes>
                    <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
                    <Route path="/home" element={<Home isLoggedIn={isLoggedIn}/>} />
                    <Route path="/Movie/:id" element={<Movie/>}/>
                    <Route path="/account" element={<MyAccount isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
                    navigateMyAccountProfile={navigateMyAccountProfile} navigateMyAccount={navigateMyAccount} />} />
                    <Route path="/account/profile" element={<MyAccountProfile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
                    deleteUser={deleteUser} />} />

                    {/* test component routes */}
                    <Route path="/test" element={<MyAccountCardItem />} />
                </Routes>
            </div>     
        </>
    )
}

export default MainContent;