/**
 * validate review values
 * @param {*} values : review values
 * @returns review value errors
 */
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
        reviewErrors.phone = 'Comment can only have up to 250 characters.'
    } 
    
    return reviewErrors;
  };
  