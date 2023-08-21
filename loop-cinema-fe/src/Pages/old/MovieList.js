import {Link} from "react-router-dom"
import { useStatusTheme } from "../Components/StatusThemeProvider"
import MovieCard from "../Components/MovieCard"
import "./MovieList.css"

function MovieList() {
    const storedData = localStorage.getItem('movie_data')
    const parsedData = JSON.parse(storedData)
    console.log("loading data from localStorage")
    const status = useStatusTheme()
    return(
        <div className="movielist_container">
            <ul className="movielist_ul">      
                { 
                    parsedData.filter((obj)=>obj.ComingSoon == status).map((obj)=>(
                        <li classNaem="movie_card">
                            <Link className="cardLink"to={"/Movie/" + obj.Title}>
                                <MovieCard 
                                key={obj.Title}
                                image={obj.Images[0]} 
                                title={obj.Title} 
                                rated={obj.Rated} 
                                runtime={obj.Runtime}
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