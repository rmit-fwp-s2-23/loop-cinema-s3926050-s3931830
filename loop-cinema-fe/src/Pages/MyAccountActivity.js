import { useNavigate } from 'react-router-dom';
import '../css/pages/MyAccountActivity.css'
import { getCurrentUserId, getUserByUserId } from '../data/userRepo';
import { useEffect, useState } from 'react';
import { deleteReviewByReviewId, getAudienceReviewListByUserId } from '../data/reviewRepo';
import { getMovieTitleByMovieId } from '../data/movieRepo';
import MyAccountActivityCard from '../Components/Fragments/MyAccountActivityCard';

const MyAccountActivity = (props) => {
    const navigate = useNavigate()
    const userId = JSON.parse(getCurrentUserId())

    useEffect(() => {
        if (userId === null) navigate("/home")
    }, [userId])

    const [currentUser, setCurrentUser] = useState({})
    const [currentMovieAudienceReviewList, setCurrentMovieAudienceReviewList] = useState(getAudienceReviewListByUserId(userId))
    const [deletingReview, setDeletingReview] = useState(false)

    useEffect(() => {
        setCurrentUser(getUserByUserId(userId))
    }, [])

    // initialize from local storage to state
    useEffect(() => {
        setCurrentMovieAudienceReviewList(getAudienceReviewListByUserId(userId))
    }, [])

    const deleteReviewOne = (reviewId) => {
        props.deleteReview(reviewId)
        setCurrentMovieAudienceReviewList(getAudienceReviewListByUserId(userId))
    }

    return (
        <>
            <div className="my-account-activity">
                <h2 className='my-account-activity-title'>Your reviews</h2>
                <div className='my-account-activity-list'>
                {
                    currentMovieAudienceReviewList.map((currentMovieAudienceReview) => (
                        <MyAccountActivityCard review={currentMovieAudienceReview} 
                        movieTitle={getMovieTitleByMovieId(currentMovieAudienceReview.movie_id)} deleteReviewOne={deleteReviewOne} />
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default MyAccountActivity