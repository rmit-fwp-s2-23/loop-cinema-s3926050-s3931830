import axios from "axios";
import {movies} from "./database-brief.js";
import { getAudienceReviewList, getAudienceReviewListByMovieId, getMovieIdFromAudienceReviewList } from "./reviewRepo.js";
import http from "../http-common.js";
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
const getMovieList = async () => {
    // const response = localStorage.getItem(MOVIE_DATA);
    // return JSON.parse(response);
    const response = await http.get("/movies/")
   
    return response.data
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

const getMovieByMovieId = async (searchMovieId) => {
    // const movieList = getMovieList()
    // if (movieList !== null) {
    //     const movieListLength = movieList.length;
    //     for (let index = 0; index < movieListLength; index++) {
    //         const movie = movieList[index];
    //         if (searchMovieId === movie.movie_id) {
    //             return movie
    //         }
    //     }
    //     return null
    // }
    // return null
    const response = await http.get(`/movies/movie/${searchMovieId}`)
    return response.data
}

const updateAverageAudienceReviewScoreOfMovie = async (movieId) => {
    let movieList = await getMovieList()
    
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
    getMovieList,
    getMovieByMovieId,
    getMovieTitleByMovieId,
    updateAverageAudienceReviewScoreOfMovie,
    updateMovieAverageScoreBulk
}