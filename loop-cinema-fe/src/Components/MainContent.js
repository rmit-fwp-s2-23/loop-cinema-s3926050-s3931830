import { Route, Routes, useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Home from "../Pages/Home";
import "../css/components/MainContent.css"
import MyAccount from "../Pages/MyAccount"
import { deleteUserByUserId, getCurrentUserId, removeCurrentUserId, updateUserByUserId } from "../data/userRepo";
import { useState, useEffect } from "react";
import Movie from "../Pages/Movie"
import MyAccountProfile from '../Pages/MyAccountProfile'
import { createNewAudienceReview, deleteAudienceReviewByUserId, deleteReviewByReviewId } from "../data/reviewRepo";
import MyAccountActivity from "../Pages/MyAccountActivity";

const MainContent = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // reload page got the login successfully message
    const [isTemporaryMessage, setIsTemporaryMessage] = useState(false);
    const [isTemporaryMessageLogOut, setIsTemporaryMessageLogOut] = useState(false)
    const [isTemporaryMessageDeleteUser, setIsTemporaryMessageDeleteUser] = useState(false)
    const [isTemporaryMessageUpdateUser, setIsTemporaryMessageUpdateUser] = useState(false)
    const [isTemporaryMessageNewReview, setIsTemporaryMessageNewReview] = useState(false)
    const [isTemporaryMessageDeleteReview, setIsTemporaryMessageDeleteReview] = useState(false)

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
        deleteAudienceReviewByUserId(getCurrentUserId())
        deleteUserByUserId(getCurrentUserId())     
        setIsLoggedIn(false)

        setIsTemporaryMessageDeleteUser(true)
        setTimeout(() => {
            setIsTemporaryMessageDeleteUser(false)
        }, 2000)
    }

    const updateUser = (values) => {
        updateUserByUserId(values)
        window.location.reload()
        
        setIsTemporaryMessageUpdateUser(true)
        setTimeout(() => {
            setIsTemporaryMessageUpdateUser(false)
        }, 2000)
    }

    const addNewReview = (reviewValue, userId, movieId) => {
        createNewAudienceReview(reviewValue, userId, movieId)
        window.location.reload()

        setTimeout(() => {
            setIsTemporaryMessageNewReview(true)
        }, 1000)

        setTimeout(() => {
            setIsTemporaryMessageNewReview(false)
        }, 2000)
    }

    const deleteReview = (reviewId) => {
        deleteReviewByReviewId(reviewId)

        setIsTemporaryMessageDeleteReview(true)
        setTimeout(() => {
            setIsTemporaryMessageDeleteReview(false)
        }, 2000)
    }

    const navigateMyAccount = () => {
        navigate("/account")
    }

    const navigateMyAccountProfile = () => {
        navigate("/account/profile")
    }

    const navigateMyAccountActivity = () => {
        navigate("/account/activity")
    }

    return (
        <>
            <div className="main-content">
                <HeaderNav setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} 
                setIsTemporaryMessage={setIsTemporaryMessage} isTemporaryMessage={isTemporaryMessage} signOut={signOut} 
                isTemporaryMessageLogOut={isTemporaryMessageLogOut} 
                navigateMyAccount={navigateMyAccount} navigateMyAccountProfile={navigateMyAccountProfile} 
                navigateMyAccountActivity={navigateMyAccountActivity}
                isTemporaryMessageDeleteUser={isTemporaryMessageDeleteUser} 
                isTemporaryMessageUpdateUser={isTemporaryMessageUpdateUser} 
                isTemporaryMessageNewReview={isTemporaryMessageNewReview} 
                isTemporaryMessageDeleteReview={isTemporaryMessageDeleteReview}/>
                <Routes>
                    <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
                    <Route path="/home" element={<Home isLoggedIn={isLoggedIn}/>} />
                    <Route path="/Movie/:id" element={<Movie isLoggedIn={isLoggedIn} addNewReview={addNewReview} />}/>
                    <Route path="/account" element={<MyAccount isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
                    navigateMyAccountProfile={navigateMyAccountProfile} navigateMyAccount={navigateMyAccount} 
                    navigateMyAccountActivity={navigateMyAccountActivity} />} />
                    <Route path="/account/profile" element={<MyAccountProfile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
                    deleteUser={deleteUser} updateUser={updateUser}/>} />
                    <Route path="/account/activity" element={<MyAccountActivity isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
                    deleteReview={deleteReview} />} />

                    {/* catch all wrong route */}
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
            </div>     
        </>
    )
}

export default MainContent;