import {Link} from "react-router-dom"
// import { useStatusTheme } from "../Components/StatusThemeProvider"
import MovieCard from "../Components/MovieCard"
import "../css/components/MovieList.css"
import { getMovieList } from "../data/movieRepo"
import { useEffect, useState } from "react";

function MovieList(props) {
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const loadMovies = async ()=>{
            const response = await getMovieList()
            setMovieList(response)
        }
        loadMovies();
    }, []);
    
    // const movieList = JSON.parse(storedData)
    
    //Sorts in Descending Order
    const compareRating = (a, b)=>{
        return -(a.movieAverageScore - b.movieAverageScore)
    }

    const finalData = props.sortRatingStatus ? [...movieList].sort(compareRating) : movieList;


    // console.log("MOVIELIST" + finalData[1].averageAudienceReviewScore);
    return(
        <>
            {movieList ? (
                <>  
                    <div className="sort_buttons">
                                <div id="sort_label"><h1>Sort By:</h1></div>
                                <button className="sort_button sort_rating" style={props.sort_rating_style} onClick={props.toggleSortRating}>Rating</button>
                                
                    </div>
                    <div className="movielist_container">
                        <ul className="movielist_ul" style={{listStyle: `none`}}>      
                            {finalData.length !== 0 ? (
                                finalData.map((obj)=>(
                                    <li className="movie_card" style={{listStyleType: `none`}}>
                                        <Link className="cardLink" to={"/Movie/" + obj.movieID}>
                                            <MovieCard 
                                            
                                            image={obj.moviePoster} 
                                            title={obj.movieTitle} 
                                            rated={obj.rating_type.ratingTypeName} 
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
                </>
            ):(
                <h1>Loading Movies Data...</h1>
            )}
        </>
    )
}

export default MovieList