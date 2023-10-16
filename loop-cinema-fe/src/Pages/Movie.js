import {useLocation} from "react-router-dom"
import "../css/pages/Movie.css"
import { useEffect, useState } from "react";
import { createNewAudienceReview, getAudienceReviewListByMovieId } from '../data/reviewRepo'
import { getCurrentUserId, getUserByUserId, getUserInfoByUserId } from "../data/userRepo";
import AudienceReviewCardItem from "../Components/Fragments/AudienceReviewCardItem";
import useForm from "../CustomHooks/useForm";
import ReviewValidate from '../Validations/ReviewValidate'
import { getMovieByMovieId, getMovieTitleByMovieId } from "../data/movieRepo";

function Movie(props) {
    /**This will be a complete section for a single movie with all its details and stuff.*/
    //Movie Detail
    const location = useLocation();
    const userId = JSON.parse(getCurrentUserId())
    // console.log(JSON.parse(userId));
    const lessDataMovieObj = location.state.movieData;

    //Fetching Movie Data
    const [movieObj, setMovieObj] = useState(null);
    const [movieNotFoundError, setMovieNotFoundError] = useState(null);
    useEffect(()=>{
        const getMovieById = async () =>{
            try{
                const response = await getMovieByMovieId(lessDataMovieObj.movieID);
                setMovieObj(response);
            }catch(e){
                setMovieNotFoundError(e);
                console.log(e);
            }
        }
        getMovieById();
    },[]);

    const [currentMovieAudienceReviewList, setCurrentMovieAudienceReviewList] = useState([])
    const [reviewing, setReviewing] = useState(false)

    // callback
    const reviewSuccess = () => {
        const elementBig = document.getElementById("audience-review-dialog");
        const elementButton = document.getElementById("audience-review-dialog-form-confirm-post");

        elementButton.setAttribute("aria-busy", true)
        setTimeout(() => {
            elementButton.removeAttribute("aria-busy")
            elementBig.removeAttribute("open")
            document.body.style.overflow = "auto"
        }, 1000)

        setReviewing(true)
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        setValues,
        isSubmitting
    } = useForm(reviewSuccess, ReviewValidate);

    // whenever callback is good -> add new review
    useEffect(() => {
        if(movieObj != null){
            if (JSON.stringify(errors) === JSON.stringify({}) && isSubmitting) {
                const reviewValue = {...values}
                props.addNewReview(reviewValue, userId, movieObj.movieID)         
            }
            setCurrentMovieAudienceReviewList(getAudienceReviewListByMovieId(movieObj.movieID))
        }
    }, [reviewing])

    // initialize from local storage to state
    // useEffect(() => {
        
    // }, [reviewing])

    /* 
        TOGGLE MODAL
    */
    const openReviewModal = () => {
        document.body.style.overflow = "hidden"
        const element = document.getElementById("audience-review-dialog");
        element.setAttribute("open", true)
    }

    const closeReviewModal = () => {
        document.body.style.overflow = "auto"
        const element = document.getElementById("audience-review-dialog");
        element.removeAttribute("open")
    }

    // print stars
    function printStars(numStars) {
        const wholeNumberPart = Math.floor(numStars);

        const starElements = [];
        for (let i = 0; i < wholeNumberPart; i++) {
            starElements.push(
            <span key={i} className="material-symbols-outlined">
                star
            </span>
            );
        }

        return starElements;
    }

    return(
        <>
        { movieObj ? (
        <div>
            <dialog id="audience-review-dialog">
                <article>
                    <h2>Posting review for {movieObj.movieTitle}</h2>          
                    <div className='login-dialog-content-form'>
                        <form onSubmit={handleSubmit} noValidate id="audience-review-dialog-form">
                            <fieldset>
                                Rating *
                                <label for="1" className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id="1" name="score" value="1" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(1)
                                        }
                                    </div>
                                </label>
                                <label for="2" className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id="2" name="score" value="2" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(2)
                                        }
                                    </div>
                                </label>
                                <label for="3" className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id="3" name="score" value="3" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(3)
                                        }
                                    </div>
                                </label>
                                <label for="4" className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id="4" name="score" value="4" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(4)
                                        }
                                    </div>
                                </label>
                                <label for="5" className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id="5" name="score" value="5" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(5)
                                        }
                                    </div>
                                </label>
                            </fieldset>
                            {
                                errors.score && (
                                    <p className="input-text-help input-error">{errors.score}</p>
                                )
                            }
                            <label for="comment">
                                Comment *
                                <textarea autoComplete="off" id="comment" name="comment" placeholder="Enter your comment..." 
                                value={values.comment || ''} onChange={handleChange} required rows="3"
                                aria-invalid={`${errors.username && 'true'}`}/>
                                {
                                    errors.comment && (
                                        <p className="input-text-help input-error">{errors.comment}</p>
                                    )
                                }
                            </label>
                            <div className="my-account-profile-confirm-delete-buttons my-account-profile-header-delete">
                                <button type="button" class="secondary outline" className="dialog-form-cancel" 
                                onClick={closeReviewModal}>
                                    <span>Cancel</span>
                                </button>
                                <button type="submit" class="contrast" id="audience-review-dialog-form-confirm-post" 
                                className="dialog-form-submit">
                                    <span>Post</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </article>
            </dialog>
                <>
                <div id="movie_header" style={{backgroundImage: `url(${movieObj.movieBanner})`, backgroundSize: `cover`, backgroundPosition: `center`}}>
                    <div id="movie_container">
                        <div className="movie_foreground">
                            <img className="movie_poster" src={movieObj.moviePoster}/>
                            <div className="movie_wrapper">
                                <h1 className="movie_heading">{movieObj.movieTitle}</h1>
                                <div className="movie_details">
                                    <span className="movie_rating">{movieObj.ratingTypeName}</span>
                                    <span clasName="movie_pipe">|</span>
                                    <span className="movie_duration">{movieObj.movieRuntime + " min"}</span>
                                    <span className="movie_pipe">|</span>
                                    <span className="movie_release-date">{movieObj.movieReleaseDate}</span>
                                </div>
                            </div>
                        </div>
                        <span className="movie_scrim"></span>
                    </div>
                </div>

                <div className="movie_body">
                    <article>
                        <hgroup>
                            <h1>Plot</h1>
                            <p>{movieObj.movieSynopsis}</p>
                        </hgroup>
                    </article>
                    <article>
                        <hgroup>
                            <h1>Cast</h1>
                            <h4>Actors</h4>
                            <p>{movieObj.castIDs}</p>
                            <h4>Director</h4>
                            <p>{movieObj.directorName}</p>
                        </hgroup>
                    </article>
                    <article className="audience-review">
                        <div className="my-account-profile-header">
                            <h2 className="audience-review-title">Reviews</h2>
                            {
                                props.isLoggedIn && (
                                    <div className="my-account-profile-header-delete">
                                        <button onClick={openReviewModal}>
                                            <span>Add Review</span>
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                        
                        <div className="audience-review-list">
                        {
                            currentMovieAudienceReviewList.map((currentMovieAudienceReview) => (
                                <AudienceReviewCardItem review={currentMovieAudienceReview} 
                                user={getUserInfoByUserId(currentMovieAudienceReview.user_id)} />
                            ))
                        }
                        </div>
                    </article>
                </div>
                </>
        </div>
        ):(
            <div> Loading Movie Data....</div>
        )}
        </>
    )
}
export default Movie