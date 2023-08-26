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

export {
    initMovieList
}