import { useNavigate } from 'react-router-dom';
import '../css/pages/MyAccountActivity.css'
import { getCurrentUserId } from '../data/userRepo';
import { useEffect, useState } from 'react';
import { getAudienceReviewListByUserId } from '../data/reviewRepo';
import { getMovieTitleByMovieId } from '../data/movieRepo';
import MyAccountActivityCard from '../Components/Fragments/MyAccountActivityCard';
import axios from 'axios';

const MyAccountActivity = (props) => {
    const navigate = useNavigate()
    const userId = JSON.parse(getCurrentUserId())

    // check if user is logged in by check localStorage current user id
    useEffect(() => {
        if (userId === null) navigate("/home")
    }, [userId])

    // const [currentMovieAudienceReviewList, setCurrentMovieAudienceReviewList] = useState(getAudienceReviewListByUserId(userId))
    const [currentMovieAudienceReviewList, setCurrentMovieAudienceReviewList] = useState([])

    // after a process done
    const [processDone, setProcessDone] = useState(false)

    const fetchReviewsFromDatabase = async () => {
        await axios.get(`http://localhost:3001/api/reviews/user/${userId}`)
        .then(response => {
            setCurrentMovieAudienceReviewList(response.data);
        })
    }

    // fetch data from db
    useEffect(() => {
        // setCurrentMovieAudienceReviewList(getAudienceReviewListByUserId(userId))
        console.log(1);
        fetchReviewsFromDatabase()
    }, [processDone])

    const deleteReviewOne = async (reviewId, movieId) => {
        await axios.delete(`http://localhost:3001/api/reviews/review/${reviewId}`)
        .then(async response => {
            console.log(response.data.message);
            setProcessDone(prev => !prev)

            // update movie score
            await axios.patch(`http://localhost:3001/api/movies/movie/movieScore/${movieId}`)
            .then(async response => {
                console.log(response.data.message);

            }).catch(error => {
                console.log(error.response.data.message);
            })
        })
        .catch (error => {
            console.log(error.response.data.message);
        })

        props.deleteReview()
        // setCurrentMovieAudienceReviewList(getAudienceReviewListByUserId(userId))
        // fetchReviewsFromDatabase()

        
    }

    const updateReviewOne = async (movieId) => {
        // update movie score
        await axios.patch(`http://localhost:3001/api/movies/movie/movieScore/${movieId}`)
        .then(response => {
            console.log(response.data.message);

            setProcessDone(prev => !prev)

        }).catch(error => {
            console.log(error.response.data.message);
        })

        props.updateReview()
        // setCurrentMovieAudienceReviewList(getAudienceReviewListByUserId(userId))
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
                        // movieTitle={getMovieTitleByMovieId(currentMovieAudienceReview.movie_id)} 
                        deleteReviewOne={deleteReviewOne} 
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