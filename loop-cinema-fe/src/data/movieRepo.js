import {movies} from "./database-brief.js";
import { getAudienceReviewList, getAudienceReviewListByMovieId, getMovieIdFromAudienceReviewList } from "./reviewRepo.js";

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
 * remove movie from localStorage and replace with a new list
 * @param {*} newMovieList : new movie array
 */
const setMovieList = (newMovieList) => {
    removeMovieList();
    localStorage.setItem(MOVIE_DATA, JSON.stringify(newMovieList))
}

/**
 * remove movie from localStorage
 */
const removeMovieList = () => {
    localStorage.removeItem(MOVIE_DATA);
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

const getMovieByMovieId = (searchMovieId) => {
    const movieList = getMovieList()
    if (movieList !== null) {
        const movieListLength = movieList.length;
        for (let index = 0; index < movieListLength; index++) {
            const movie = movieList[index];
            if (searchMovieId === movie.movie_id) {
                return movie
            }
        }
        return null
    }
    return null
}

const updateAverageAudienceReviewScoreOfMovie = (movieId) => {
    let movieList = getMovieList()
    const reviewList = getAudienceReviewListByMovieId(movieId)
    let newMovieObject = {...getMovieByMovieId(movieId)}

    if (reviewList !== null) {
        let averageScore = 0;
        const reviewListLength = reviewList.length;

        for (let index = 0; index < reviewListLength; index++) {
            const review = reviewList[index];
            averageScore += Math.floor(review.score)
        }

        averageScore = Math.floor(averageScore / reviewListLength).toString()
        newMovieObject.averageAudienceReviewScore = averageScore

        const movieListLength = movieList.length;

        for (let index = 0; index < movieListLength; index++) {
            const movie = movieList[index];
            if (newMovieObject.movie_id === movie.movie_id) {
                movieList.splice(index, 1, newMovieObject)
            }
        }
        const newMovieList = [...movieList]   
        setMovieList(newMovieList)
    }
}

const updateMovieAverageScoreBulk = () => {
    const movieIdList = getMovieIdFromAudienceReviewList()

    const movieIdListLength = movieIdList.length;
    for (let index = 0; index < movieIdListLength; index++) {
        const movieId = movieIdList[index];
        updateAverageAudienceReviewScoreOfMovie(movieId)
    }
}

export {
    initMovieList,
    getMovieTitleByMovieId,
    updateAverageAudienceReviewScoreOfMovie,
    updateMovieAverageScoreBulk
}