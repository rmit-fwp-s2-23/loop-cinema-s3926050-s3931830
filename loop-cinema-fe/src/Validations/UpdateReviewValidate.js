import axios from "axios";
import { getCurrentUserId } from "../data/userRepo";

/**
 * validate review values
 * @param {*} values : review values
 * @returns review value errors
 */
export default async function UpdateReviewValidate(values) {
    const API_HOST = "http://localhost:3001/api/reviews";
    let updateReviewErrors = {};
    /*  
        score
        comment
    */

    // required 
    if (!values.audienceReviewScore) {
        updateReviewErrors.score = 'Rating is required.';
    } 
    if (!values.audienceReviewComment || values.audienceReviewComment.replace(/<(.|\n)*?>/g, "").trim().length === 0) {
        updateReviewErrors.comment = 'Comment is required.';
    } else if (!/^.{1,600}$/.test(values.audienceReviewComment)) {
        updateReviewErrors.comment = 'Comment can only have up to 600 characters.'
    } 
    
    if (JSON.stringify(updateReviewErrors) === JSON.stringify({})) {
        const audienceReviewID = values.audienceReviewID
        const movieId = values.movieId
        const newReview = {}
        newReview.audienceReviewComment = values.audienceReviewComment
        newReview.audienceReviewScore = values.audienceReviewScore

        await axios.patch(`http://localhost:3001/api/reviews/review/${audienceReviewID}`, newReview)
        .then(async response => {
            // console.log(response.data.message);

            
        })
        .catch(error => {
            if (error.response) {
                updateReviewErrors.audienceReviewScore = error.response.data.message
            }
        })
    }

    return updateReviewErrors;
};
  