import {movies} from "./database-brief.js";

const MOVIE_DATA = "movie_data"

const initMovieList = () => {
    // check if object is already initialized
    if (localStorage.getItem(MOVIE_DATA) !== null) {
        return
    } else {
        localStorage.setItem(MOVIE_DATA, JSON.stringify(movies))
    }
}

const getMovieList = () => {
    const response = localStorage.getItem(MOVIE_DATA);
    return JSON.parse(response);  
}

// return movie title
const getMovieTitleByMovieId = (searchMovieId) => {
    const movieList = getMovieList()

    if (movieList !== null) {
        const movieListLength = movieList.length;
        for (let index = 0; index < movieListLength; index++) {
            const movie = movieList[index];
            if (searchMovieId === movie.movie_id) {
                return movie.title
            }
        }
        return null
    }
    return null
}

export {
    initMovieList,
    getMovieTitleByMovieId
}