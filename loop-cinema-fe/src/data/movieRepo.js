import {movies} from "./database-brief.js";

const MOVIE_DATA = "movie_data"

/**
 * init movie list to localStorage first time
 * @returns none
 */
const initMovieList = () => {
    // check if object is already initialized
    if (localStorage.getItem(MOVIE_DATA) !== null) {
        return
    } else {
        localStorage.setItem(MOVIE_DATA, JSON.stringify(movies))
    }
}

/**
 * get movie list from localStorage
 * @returns a list of movies (array)
 */
const getMovieList = () => {
    const response = localStorage.getItem(MOVIE_DATA);
    return JSON.parse(response);  
}

/**
 * get movie title by movie id
 * @param {*} searchMovieId: movie id 
 * @returns movie title (string)
 */
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