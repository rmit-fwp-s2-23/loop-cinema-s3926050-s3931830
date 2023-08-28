import {audienceReviews} from "./database-brief.js";
import moment from 'moment'

const AUDIENCE_REVIEW_DATA = "audience_review_data"

/**
 * init audience review to localStorage first time
 * @returns none
 */
const initAudienceReviewList = () => {
    // check if object is already initialized
    if (localStorage.getItem(AUDIENCE_REVIEW_DATA) !== null) {
        return
    } else {
        localStorage.setItem(AUDIENCE_REVIEW_DATA, JSON.stringify(audienceReviews))
    }
}

/**
 * get audience review list from localStorage
 * @returns a list of reviews (array)
 */
const getAudienceReviewList = () => {
    const response = localStorage.getItem(AUDIENCE_REVIEW_DATA);
    return JSON.parse(response);  
}

/**
 * remove review from localStorage and replace with a new list
 * @param {*} newAudienceReviewList : new audience review array
 */
const setAudienceReviewList = (newAudienceReviewList) => {
    removeAudienceReviewList();
    localStorage.setItem(AUDIENCE_REVIEW_DATA, JSON.stringify(newAudienceReviewList))
}

/**
 * remove audience review from localStorage
 */
const removeAudienceReviewList = () => {
    localStorage.removeItem(AUDIENCE_REVIEW_DATA);
}

/**
 * get an audience review list by user id
 * @param {*} searchAudienceReviewUserId : user id
 * @returns an array of reviews if found - null if not
 */
const getAudienceReviewListByUserId = (searchAudienceReviewUserId) => {
    const audienceReviewList = getAudienceReviewList()
    let audienceReviewListByUserId = []

    if (audienceReviewList !== null) {
        const audienceReviewListLength = audienceReviewList.length;
        for (let index = 0; index < audienceReviewListLength; index++) {
            const audienceReview = audienceReviewList[index];
            if (searchAudienceReviewUserId === audienceReview.user_id) {
                audienceReviewListByUserId.push(audienceReview)
            }
        }
        return audienceReviewListByUserId
    }
    return null
}

/**
 * get audience review for a movie id
 * @param {*} searchAudienceReviewMovieId : movie id
 * @returns an array of reviews if found - null if not
 */
const getAudienceReviewListByMovieId = (searchAudienceReviewMovieId) => {
    const audienceReviewList = getAudienceReviewList()
    let audienceReviewListByMovieId = []

    if (audienceReviewList !== null) {
        const audienceReviewListLength = audienceReviewList.length;
        for (let index = 0; index < audienceReviewListLength; index++) {
            const audienceReview = audienceReviewList[index];
            if (searchAudienceReviewMovieId === audienceReview.movie_id) {
                audienceReviewListByMovieId.push(audienceReview)
            }
        }
        return audienceReviewListByMovieId
    }
    return null
}

/**
 * get the list of movie id from audience review list
 * @returns an array of movie id
 */
const getMovieIdFromAudienceReviewList = () => {
    const audienceReviewList = getAudienceReviewList()
    let movieIdList = []

    if (audienceReviewList !== null) {
        const audienceReviewListLength = audienceReviewList.length;
        for (let index = 0; index < audienceReviewListLength; index++) {
            const audienceReview = audienceReviewList[index];
            movieIdList.push(audienceReview.movie_id)
        }
        return movieIdList
    }
}

/**
 * get audience review by review id
 * @param {*} searchAudienceReviewId :review id
 * @returns a review object if found - null if not
 */
const getAudienceReviewById = (searchAudienceReviewId) => {
    const audienceReviewList = getAudienceReviewList()
    if (audienceReviewList !== null) {
        const audienceReviewListLength = audienceReviewList.length;
        for (let index = 0; index < audienceReviewListLength; index++) {
            const audienceReview = audienceReviewList[index];
            if (searchAudienceReviewId === audienceReview.audience_review_id) {
                return audienceReview
            }
        }
        return null
    }
    return null
}

/**
 * delete reviews by user id and update localStorage
 * @param {*} searchAudienceReviewUserId : user id
 * 
 * @description : create an empty array and push elements that fit into it
 * cannot use splice as splice mutable (modify array when for loop -> error & incorrect)
 */
const deleteAudienceReviewByUserId = (searchAudienceReviewUserId) => {
    let audienceReviewList = getAudienceReviewList()
    let newAudienceReviewList = []

    if (audienceReviewList !== null) {
        const audienceReviewListLength = audienceReviewList.length;
        for (let index = 0; index < audienceReviewListLength; index++) {
            const audienceReview = audienceReviewList[index];
            if (JSON.parse(searchAudienceReviewUserId) === audienceReview.user_id) {            
            } else {
                newAudienceReviewList.push(audienceReview)
            }
        }

        setAudienceReviewList(newAudienceReviewList)
    }
}

/**
 * add new review to list
 * @param {*} newAudienceReview : review object
 */
const addAudienceReviewToList = (newAudienceReview) => {
    let currentAudienceReviewList = getAudienceReviewList();

    // if no key was found -> set new user_list to empty array
    if (currentAudienceReviewList == null) currentAudienceReviewList = [];

    const newAudienceReviewList = [...currentAudienceReviewList];
    newAudienceReviewList.push(newAudienceReview);
    
    setAudienceReviewList(newAudienceReviewList)
}

/**
 * create new review object and add that object to list
 * @param {*} addingAudienceReviewObject : incomplete review object
 * @param {*} userId : user id
 * @param {*} movieId : movie id
 */
const createNewAudienceReview = (addingAudienceReviewObject, userId, movieId) => {
    const newAudienceReview = {
        movie_id: movieId,
        audience_review_id: "AR" + moment().format('YYMMDDHHmmss'),
        user_id: userId,
        comment: addingAudienceReviewObject.comment,
        score: addingAudienceReviewObject.score,
        createdAt: moment().format('DD/MM/YYYY'),
        updatedAt: moment().format('DD/MM/YYYY')
    }

    addAudienceReviewToList(newAudienceReview)
}

/**
 * delete review by review id and update to localStorage
 * @param {*} reviewId : review id
 * @description : can use splice as there are only 1 review with a specific id
 */
const deleteReviewByReviewId = (reviewId) => {
    let reviewList = getAudienceReviewList()

    if (reviewList !== null) {
        const reviewListLength = reviewList.length;
        for (let index = 0; index < reviewListLength; index++) {
            const review = reviewList[index];
            if (reviewId === review.audience_review_id) {
                reviewList.splice(index, 1)
                break;
            }
        }
        const newReviewList = [...reviewList]
        setAudienceReviewList(newReviewList)
    }
}

/**
 * update current review object with new values
 * @param {*} values : new values
 * @description : values already contain review id
 */
const updateReviewByReviewId = (values) => {
    let newReviewObject = {...values}
    newReviewObject.updatedAt = moment().format('DD/MM/YYYY')

    let reviewList = getAudienceReviewList()
    if (reviewList !== null) {
        const reviewListLength = reviewList.length;
        for (let index = 0; index < reviewListLength; index++) {
            const review = reviewList[index];
            if (newReviewObject.audience_review_id === review.audience_review_id) {
                reviewList.splice(index, 1, newReviewObject)
                // reviewList.push(newReviewObject)
                const newReviewList = [...reviewList]   
                setAudienceReviewList(newReviewList)
            }
        }
    }
}


export {
    initAudienceReviewList,
    setAudienceReviewList,
    getAudienceReviewList,
    getAudienceReviewById,
    deleteAudienceReviewByUserId,
    removeAudienceReviewList,
    getAudienceReviewListByUserId,
    getAudienceReviewListByMovieId,
    createNewAudienceReview,
    deleteReviewByReviewId,
    updateReviewByReviewId,
    getMovieIdFromAudienceReviewList
}