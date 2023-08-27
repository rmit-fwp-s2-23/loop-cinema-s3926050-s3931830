import {audienceReviews} from "./database-brief.js";
import moment from 'moment'

const AUDIENCE_REVIEW_DATA = "audience_review_data"

const initAudienceReviewList = () => {
    // check if object is already initialized
    if (localStorage.getItem(AUDIENCE_REVIEW_DATA) !== null) {
        return
    } else {
        localStorage.setItem(AUDIENCE_REVIEW_DATA, JSON.stringify(audienceReviews))
    }
}

const getAudienceReviewList = () => {
    const response = localStorage.getItem(AUDIENCE_REVIEW_DATA);
    return JSON.parse(response);  
}

const setAudienceReviewList = (newAudienceReviewList) => {
    removeAudienceReviewList();
    localStorage.setItem(AUDIENCE_REVIEW_DATA, JSON.stringify(newAudienceReviewList))
}

const removeAudienceReviewList = () => {
    localStorage.removeItem(AUDIENCE_REVIEW_DATA);
}

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

const deleteAudienceReviewByUserId = (searchAudienceReviewUserId) => {
    let audienceReviewList = getAudienceReviewList()
    let newAudienceReviewList = [...audienceReviewList]

    if (audienceReviewList !== null) {
        const audienceReviewListLength = audienceReviewList.length;
        for (let index = 0; index < audienceReviewListLength; index++) {
            const audienceReview = audienceReviewList[index];
            console.log("ok1");
            if (JSON.parse(searchAudienceReviewUserId) === audienceReview.user_id) {
                console.log("ok2");
                newAudienceReviewList.splice(index, 1)
            }
        }
        setAudienceReviewList(newAudienceReviewList)
    }
}

const addAudienceReviewToList = (newAudienceReview) => {
    const currentAudienceReviewList = getAudienceReviewList();

    // if no key was found -> set new user_list to empty array
    if (currentAudienceReviewList == null) currentAudienceReviewList = [];

    const newAudienceReviewList = [...currentAudienceReviewList];
    newAudienceReviewList.push(newAudienceReview);
    
    setAudienceReviewList(newAudienceReviewList)
}

const createNewAudienceReview = (addingAudienceReviewObject, userId, movieId) => {
    const newAudienceReview = {
        movie_id: movieId,
        audience_review_id: "AR" + moment().format('YYMMDDHHmmss'),
        user_id: userId,
        comment: addingAudienceReviewObject.comment,
        score: addingAudienceReviewObject.score,
        createdAt: moment().format('DD/MM/YYYY'),
        updatedAt: ""
    }

    addAudienceReviewToList(newAudienceReview)
}

// delete a review by review id and update localStorage
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
    deleteReviewByReviewId
}