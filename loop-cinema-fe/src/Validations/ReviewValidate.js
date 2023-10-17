import axios from "axios";
import { getCurrentUserId } from "../data/userRepo";

/**
 * validate review values
 * @param {*} values : review values
 * @returns review value errors
 */
export default async function ReviewValidate(values) {
    const API_HOST = "http://localhost:3001/api/reviews";
    let reviewErrors = {};
    /*  
        score
        comment
    */

    // required 
    if (!values.score) {
        reviewErrors.score = 'Rating is required.';
    } 
    if (!values.comment || values.comment.replace(/<(.|\n)*?>/g, "").trim().length === 0) {
        reviewErrors.comment = 'Comment is required.';
    } else if (!/^.{1,600}$/.test(values.comment)) {
        reviewErrors.comment = 'Comment can only have up to 600 characters.'
    } 
    
    if (JSON.stringify(reviewErrors) === JSON.stringify({})) {
        const userID = JSON.parse(getCurrentUserId())
        const movieID = values.movieID

        const newReview = {}
        newReview.audienceReviewComment = values.comment;
        newReview.audienceReviewScore = Number(values.score);
        newReview.userID = userID;
        newReview.movieID = movieID;

        await axios.post(API_HOST + '/createReview', newReview)
        .then(async response => {
            // const audience_review = response.data
            await axios.patch(`http://localhost:3001/api/movies/movie/movieScore/${movieID}`)
            .then(response => {
                console.log(response.data.message);
            }).catch(error => {
                console.log(error.response.data.message);
            })
        })
        .catch(error => {
            if (error.response) {
                reviewErrors.comment = error.response.data.message
            }
        })
    }

    return reviewErrors;
  };
  