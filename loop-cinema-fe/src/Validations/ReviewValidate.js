import { addUserToList, createNewUser, setCurrentUserId } from "../data/userRepo";

// need to update to validate unique
export default function ReviewValidate (values) {
    let reviewErrors = {};
    /*  
        score
        comment
    */

    // required 
    if (!values.score) {
        reviewErrors.score = 'Rating is required.';
    } 
    if (!values.comment) {
        reviewErrors.comment = 'Comment is required.';
    } else if (!/^.{1,250}$/.test(values.comment)) {
        reviewErrors.phone = 'Comment can only have upto 250 characters.'
    } 
    
    return reviewErrors;
  };
  