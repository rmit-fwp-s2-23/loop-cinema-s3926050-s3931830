import { useNavigate } from 'react-router-dom';
import '../css/pages/MyAccountActivity.css'
import { getCurrentUserId } from '../data/userRepo';
import { useEffect, useState } from 'react';
import { getAudienceReviewListByUserId } from '../data/reviewRepo';
import { getMovieTitleByMovieId } from '../data/movieRepo';
import MyAccountActivityCard from '../Components/Fragments/MyAccountActivityCard';

const MyAccountActivity = (props) => {
    const navigate = useNavigate()
    const userId = JSON.parse(getCurrentUserId())

    // check if user is logged in by check localStorage current user id
    useEffect(() => {
        if (userId === null) navigate("/home")
    }, [userId])

    const [currentMovieAudienceReviewList, setCurrentMovieAudienceReviewList] = useState(getAudienceReviewListByUserId(userId))

    // initialize from local storage to state
    useEffect(() => {
        setCurrentMovieAudienceReviewList(getAudienceReviewListByUserId(userId))
    }, [])

    const deleteReviewOne = (reviewId, movieId) => {
        props.deleteReview(reviewId, movieId)
        setCurrentMovieAudienceReviewList(getAudienceReviewListByUserId(userId))
    }

    const updateReviewOne = (values) => {
        props.updateReview(values)
        setCurrentMovieAudienceReviewList(getAudienceReviewListByUserId(userId))
    }

    return (
        <>
            <div className="my-account-activity">
                <h2 className='my-account-activity-title'>Your reviews</h2>
                <div className='my-account-activity-list'>
                {
                    currentMovieAudienceReviewList.length > 0 ?
                    currentMovieAudienceReviewList.map((currentMovieAudienceReview) => (
                        <MyAccountActivityCard review={currentMovieAudienceReview} 
                        movieTitle={getMovieTitleByMovieId(currentMovieAudienceReview.movie_id)} deleteReviewOne={deleteReviewOne} 
                        updateReviewOne={updateReviewOne} />
                    )) :
                    <p>You have not made any reviews!</p>
                }
                </div>
            </div>
        </>
    )
}

export default MyAccountActivity