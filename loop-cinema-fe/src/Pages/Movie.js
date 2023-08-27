import {useLocation} from "react-router-dom"
import "../css/pages/Movie.css"
import { useState } from "react";
import { getAudienceReviewListByMovieId } from '../data/reviewRepo'
import { getUserInfoByUserId } from "../data/userRepo";

function Movie(){
    /**This will be a complete section for a single movie with all its details and stuff.*/

    //Movie Detail
    const location = useLocation();
    const movieObj = location.state.movieData;

    const [currentMovieAudienceReviewList, setCurrentMovieAudienceReviewList] = useState(getAudienceReviewListByMovieId(movieObj.movie_id))

    return(
        <div>
            <div id="movie_header" style={{backgroundImage: `url(${movieObj.banner})`, backgroundSize: `cover`, backgroundPosition: `center`}}>
                <div id="movie_container">
                    <div className="movie_foreground">
                        <img className="movie_poster" src={movieObj.poster}/>
                        <div className="movie_wrapper">
                            <h1 className="movie_heading">{movieObj.title}</h1>
                            <div className="movie_details">
                                <span className="movie_rating">{movieObj.rating}</span>
                                <span clasName="movie_pipe">|</span>
                                <span className="movie_duration">{movieObj.runTime + " min"}</span>
                                <span clasName="movie_pipe">|</span>
                                <span className="movie_release-date">{movieObj.releaseDate}</span>
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
                        <p>{movieObj.synopsis}</p>
                    </hgroup>
                </article>
                <article>
                    <hgroup>
                        <h1>Cast</h1>
                        <h4>Actors</h4>
                        <p>{movieObj.casts}</p>
                        <h4>Director</h4>
                        <p>{movieObj.directors}</p>
                    </hgroup>
                </article>
                <article>
                    {
                        currentMovieAudienceReviewList.map((currentMovieAudienceReview) => (
                            <div>
                                <p>{JSON.stringify(currentMovieAudienceReview)}</p>
                                <p>{JSON.stringify(getUserInfoByUserId(currentMovieAudienceReview.user_id))}</p>
                            </div>
                        ))
                    }
                </article>
            </div>
        </div>
    )
}
export default Movie