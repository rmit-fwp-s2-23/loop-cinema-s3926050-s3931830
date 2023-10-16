import {Link} from "react-router-dom"
// import { useStatusTheme } from "../Components/StatusThemeProvider"
import MovieCard from "../Components/MovieCard"
import "../css/components/MovieList.css"
import { getMovieList } from "../data/movieRepo"
import { useState } from "react";

function MovieList({sortRatingStatus}) {
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(null);
    useState(async ()=>{
        const response = await getMovieList()
        setMovieList(response)
    }, [movieList]);
    
    // const movieList = JSON.parse(storedData)
    
    //Sorts in Descending Order
    const compareRating = (a, b)=>{
        return -(a.movieAverageScore - b.movieAverageScore)
    }

    const finalData = sortRatingStatus ? [...movieList].sort(compareRating) : movieList;

    // console.log("MOVIELIST" + finalData[1].averageAudienceReviewScore);
    return(
        <div className="movielist_container">
            <ul className="movielist_ul" style={{listStyle: `none`}}>      
                {finalData.length !== 0 ? (
                    finalData.map((obj)=>(
                        <li className="movie_card" style={{listStyleType: `none`}}>
                            <Link className="cardLink" to={"/Movie/" + obj.movieTitle} state={{movieData: obj}}>
                                <MovieCard 
                                
                                image={obj.moviePoster} 
                                title={obj.movieTitle} 
                                rated={obj.ratingTypeName} 
                                runtime={obj.movieRuntime}
                                stars = {obj.movieAverageScore}
                                />
                            </Link>

                        </li>
                    ))
                    ):(
                        <div>
                            Loading Movies List ...
                        </div>
                )}
            </ul>
        </div>
    )
}

export default MovieList