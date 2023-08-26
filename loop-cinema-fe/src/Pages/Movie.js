import {useLocation} from "react-router-dom"
import "../css/pages/Movie.css"

function Movie(){
    /**This will be a complete section for a single movie with all its details and stuff.*/

    //Movie Detail
    const location = useLocation();
    const movieObj = location.state.movieData;

    return(
        <div>
            <div id="movie_header" style={{backgroundImage: `url(${movieObj.Images[0]})`, backgroundSize: `cover`, backgroundPosition: `center`}}>
                <div id="movie_container">
                    <div className="movie_foreground">
                        <img className="movie_poster" src={movieObj.Images[1]}/>
                        <div className="movie_wrapper">
                            <h1 className="movie_heading">{movieObj.Title}</h1>
                            <div className="movie_details">
                                <span className="movie_rating">{movieObj.Rated}</span>
                                <span clasName="movie_pipe">|</span>
                                <span className="movie_duration">{movieObj.Runtime}</span>
                                <span clasName="movie_pipe">|</span>
                                <span className="movie_release-date">{movieObj.Released}</span>
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
                        <p>{movieObj.Plot}</p>
                    </hgroup>
                </article>
                <article>
                    <hgroup>
                        <h1>Cast</h1>
                        <h4>Actors</h4>
                        <p>{movieObj.Actors}</p>
                        <h4>Director</h4>
                        <p>{movieObj.Director}</p>
                    </hgroup>
                </article>
                <article>
                    <hgroup>
                        <h1>Reviews</h1>
                        <p>To be Built...</p>
                    </hgroup>
                </article>
            </div>
        </div>
    )
}
export default Movie