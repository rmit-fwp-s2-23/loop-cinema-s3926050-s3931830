import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Home from "../Pages/Home";
import "../css/components/MainContent.css"
import MyAccount from "../Pages/MyAccount"
import { deleteUserByUserId, getCurrentUserId, removeCurrentUserId, updateUserByUserId } from "../data/userRepo";
import { useState, useEffect } from "react";
import Movie from "../Pages/Movie"
import MyAccountProfile from '../Pages/MyAccountProfile'
import { createNewAudienceReview, deleteAudienceReviewByUserId, deleteReviewByReviewId, updateReviewByReviewId } from "../data/reviewRepo";
import MyAccountActivity from "../Pages/MyAccountActivity";
import { updateAverageAudienceReviewScoreOfMovie, updateMovieAverageScoreBulk } from "../data/movieRepo";
import { AboutUs } from "../Pages/AboutUs";
import axios from "axios";
import MyAccountReservation from "../Pages/MyAccountReservation";

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
    const [isTemporaryMessageUpdateReview, setIsTemporaryMessageUpdateReview] = useState(false)

    const updateAverageMovieScoreBulk = async () => {
        // update movie score
        await axios.patch(`http://localhost:3001/api/movies/updateScoreBulk`)
        .then(async response => {
            console.log(response.data.message);
        }).catch(error => {
            console.log(error.response.data.message);
        })
    }

    // update movie score of all movies when first time mounting
    useEffect(() => {
        updateAverageMovieScoreBulk()
    }, [])

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

    // delete user + update movie rating
    const deleteUser = async () => {
        // deleteAudienceReviewByUserId(getCurrentUserId())
        // updateMovieAverageScoreBulk()
        // deleteUserByUserId(getCurrentUserId())    
        const userID = JSON.parse(getCurrentUserId())

        // delete reviews of user
        await axios.delete(`http://localhost:3001/api/reviews/user/${userID}`)
        .then(async response => {
            console.log(response.data.message);

            // update movie score
            await axios.patch(`http://localhost:3001/api/movies/updateScoreBulk`)
            .then(async response => {
                console.log(response.data.message);

                // delete user
                await axios.delete(`http://localhost:3001/api/users/user/${userID}`)
                .then(response => {
                    console.log(response.data.message);

                    removeCurrentUserId()
                    setIsLoggedIn(false)
                }).catch(error => {
                    console.log(error.response.data.message);
                })
            }).catch(error => {
                console.log(error.response.data.message);
            })
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data.message);
            }
        })

        setIsTemporaryMessageDeleteUser(true)
        setTimeout(() => {
            setIsTemporaryMessageDeleteUser(false)
        }, 2000)
    }

    const updateUser = () => {
        setIsTemporaryMessageUpdateUser(true)
        setTimeout(() => {
            setIsTemporaryMessageUpdateUser(false)
        }, 2000)

        // because data is fetch by api now -> does not need to reload for changes (in update user at least)
        // window.location.reload()
    }

    // add new review + update movie rating
    const addNewReview = () => {
        // createNewAudienceReview(reviewValue, userId, movieId)
        // updateAverageAudienceReviewScoreOfMovie(movieId)
        // window.location.reload()

        setTimeout(() => {
            setIsTemporaryMessageNewReview(true)
        }, 1000)

        setTimeout(() => {
            setIsTemporaryMessageNewReview(false)
        }, 2000)
    }

    // delete review + update movie rating
    const deleteReview = () => {
        // deleteReviewByReviewId(reviewId)
        // updateAverageAudienceReviewScoreOfMovie(movieId)

        setIsTemporaryMessageDeleteReview(true)
        setTimeout(() => {
            setIsTemporaryMessageDeleteReview(false)
        }, 2000)
    }

    // update review + update movie rating
    const updateReview = () => {
        // updateReviewByReviewId(values)
        // updateAverageAudienceReviewScoreOfMovie(values.movie_id)

        setIsTemporaryMessageUpdateReview(true)
        setTimeout(() => {
            setIsTemporaryMessageUpdateReview(false)
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

    const navigateMyAccountReservation = () => {
        navigate("/account/reservation")
    }

    return (
        <>
            <div className="main-content">
                <HeaderNav setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} 
                setIsTemporaryMessage={setIsTemporaryMessage} isTemporaryMessage={isTemporaryMessage} signOut={signOut} 
                isTemporaryMessageLogOut={isTemporaryMessageLogOut} 
                navigateMyAccount={navigateMyAccount} navigateMyAccountProfile={navigateMyAccountProfile} 
                navigateMyAccountActivity={navigateMyAccountActivity}
                navigateMyAccountReservation={navigateMyAccountReservation}
                isTemporaryMessageDeleteUser={isTemporaryMessageDeleteUser} 
                isTemporaryMessageUpdateUser={isTemporaryMessageUpdateUser} 
                isTemporaryMessageNewReview={isTemporaryMessageNewReview} 
                isTemporaryMessageDeleteReview={isTemporaryMessageDeleteReview}
                isTemporaryMessageUpdateReview={isTemporaryMessageUpdateReview} />
                <Routes>
                    <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
                    <Route path="/home" element={<Home isLoggedIn={isLoggedIn}/>} />
                    <Route path="/Movie/:id" element={<Movie isLoggedIn={isLoggedIn} addNewReview={addNewReview} />}/>
                    <Route path="/AboutUs" element={<AboutUs/>}/>
                    <Route path="/account" element={<MyAccount isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
                    navigateMyAccountProfile={navigateMyAccountProfile} navigateMyAccount={navigateMyAccount} 
                    navigateMyAccountActivity={navigateMyAccountActivity} navigateMyAccountReservation={navigateMyAccountReservation}/>} />
                    <Route path="/account/profile" element={<MyAccountProfile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
                    deleteUser={deleteUser} updateUser={updateUser}/>} />
                    <Route path="/account/activity" element={<MyAccountActivity isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
                    deleteReview={deleteReview} updateReview={updateReview} />} />
                    <Route path="/account/reservation" element={<MyAccountReservation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

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