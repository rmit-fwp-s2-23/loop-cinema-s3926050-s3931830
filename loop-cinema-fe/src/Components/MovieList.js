import {Link} from "react-router-dom"
// import { useStatusTheme } from "../Components/StatusThemeProvider"
import MovieCard from "../Components/MovieCard"
import "../css/components/MovieList.css"

function MovieList({sortRatingStatus}) {
    const storedData = localStorage.getItem('movie_data')
    const parsedData = JSON.parse(storedData)
    
    //Sorts in Descending Order
    const compareRating = (a, b)=>{
        return -(a.averageAudienceReviewScore - b.averageAudienceReviewScore)
    }

    const finalData = sortRatingStatus ? [...parsedData].sort(compareRating) : parsedData;

    // console.log("MOVIELIST" + finalData[1].averageAudienceReviewScore);
    return(
        <div className="movielist_container">
            <ul className="movielist_ul" style={{listStyle: `none`}}>      
                { 
                    finalData.map((obj)=>(
                        <li classNaem="movie_card" style={{listStyleType: `none`}}>
                            <Link className="cardLink" to={"/Movie/" + obj.title} state={{movieData: obj}}>
                                <MovieCard 
                                key={obj.movie_id}
                                image={obj.poster} 
                                title={obj.title} 
                                rated={obj.rating} 
                                runtime={obj.runTime}
                                stars = {obj.averageAudienceReviewScore}
                                />
                            </Link>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MovieList