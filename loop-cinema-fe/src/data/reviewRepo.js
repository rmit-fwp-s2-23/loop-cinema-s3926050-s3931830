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

const deleteAudienceReviewById = (searchAudienceReviewId, searchAudienceReviewUserId) => {
    let audienceReviewList = getAudienceReviewList()
    if (audienceReviewList !== null) {
        const audienceReviewListLength = audienceReviewList.length;
        for (let index = 0; index < audienceReviewListLength; index++) {
            const audienceReview = audienceReviewList[index];
            if (searchAudienceReviewId === JSON.stringify(audienceReview.audience_review_id) && 
            searchAudienceReviewUserId === JSON.stringify(audienceReview.user_id)) {
                audienceReviewList.splice(index)
                const newAudienceReviewList = [...audienceReviewList]
                setAudienceReviewList(newAudienceReviewList)
            }
        }
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

export {
    initAudienceReviewList,
    setAudienceReviewList,
    getAudienceReviewList,
    getAudienceReviewById,
    deleteAudienceReviewById,
    removeAudienceReviewList,
    getAudienceReviewListByUserId,
    getAudienceReviewListByMovieId
}