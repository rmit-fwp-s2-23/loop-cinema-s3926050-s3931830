import {Link} from "react-router-dom"

function MovieList(){
    return(
        <>
            <h1>Movie List</h1>

            {/**Here basically we could call in a for loop and get data from the localStorage and pass it into these Links which will renderr the JSX according to the route.
             * 
             * Also here instead of just printing 'Movie 1' we could basically print a block of the movie via bootstrapping it here.
            */}
            <h2><Link to="/MovieList/1">Movie 1</Link></h2>
            <h2><Link to="/MovieList/2">Movie 2</Link></h2>
            <h2><Link to="/MovieList/3">Movie 3</Link></h2>
        </>
    )
}

export default MovieList