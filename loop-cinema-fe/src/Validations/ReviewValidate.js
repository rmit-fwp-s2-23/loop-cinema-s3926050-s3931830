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
    if (!values.comment || values.comment.replace(/<(.|\n)*?>/g, "").trim().length === 0) {
        reviewErrors.comment = 'Comment is required.';
    } else if (!/^.{1,600}$/.test(values.comment)) {
        reviewErrors.comment = 'Comment can only have up to 600 characters.'
    } 
    
    return reviewErrors;
  };
  