import { useEffect, useState } from 'react';
import useForm from '../../CustomHooks/useForm';
import ReviewValidate from '../../Validations/ReviewValidate';
import '../../css/MyAccountActivityCard.css'

/**
 * review card item in my account activity page
 */
const MyAccountActivityCard = (props) => {
    const CONFIRM_DELETE_DIALOG_ID = `my-account-activity-confirm-delete-comment-` + props.review.audience_review_id;
    const UPDATE_DIALOG_ID = `my-account-activity-update-comment-` + props.review.audience_review_id;
    const UPDATE_DIALOG_SUBMIT_BUTTON = `my-account-activity-update-comment-submit-` + props.review.audience_review_id;

    const UPDATE_DIALOG_CHECKBOX_ID_1 = `my-account-activity-update-checkbox-` + props.review.audience_review_id + "-1";
    const UPDATE_DIALOG_CHECKBOX_ID_2 = `my-account-activity-update-checkbox-` + props.review.audience_review_id + "-2";
    const UPDATE_DIALOG_CHECKBOX_ID_3 = `my-account-activity-update-checkbox-` + props.review.audience_review_id + "-3";
    const UPDATE_DIALOG_CHECKBOX_ID_4 = `my-account-activity-update-checkbox-` + props.review.audience_review_id + "-4";
    const UPDATE_DIALOG_CHECKBOX_ID_5 = `my-account-activity-update-checkbox-` + props.review.audience_review_id + "-5";

    // set updating state for comment when updating
    const [updating, setUpdating] = useState(false)

    const updateSuccess = () => {
        setUpdating(true)
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        setValues,
        isSubmitting
    } = useForm(updateSuccess, ReviewValidate);

    // initialize first time values from localStorage
    useEffect(() => {
        setValues({...props.review})
    }, [])

    useEffect(() => {
        if (JSON.stringify(errors) === JSON.stringify({}) && isSubmitting) {
            const elementBig = document.getElementById(UPDATE_DIALOG_ID);
            const elementButton = document.getElementById(UPDATE_DIALOG_SUBMIT_BUTTON);

            elementButton.setAttribute("aria-busy", true)
            setTimeout(() => {
                elementButton.removeAttribute("aria-busy")
                const inputCheckboxElementId = `my-account-activity-update-checkbox-` + props.review.audience_review_id + "-" + values.score
                const inputCheckboxElement = document.getElementById(inputCheckboxElementId)
                inputCheckboxElement.removeAttribute("checked")

                elementBig.removeAttribute("open")
                document.body.style.overflow = "auto"
            }, 1000)

            props.updateReviewOne(values)  

            // cannot update one item 2 consecutive time if not reload -> investigate further
            // window.location.reload()
        }
    }, [updating])

    // open confirm delete comment message
    const confirmDeleteComment = () => {
        document.body.style.overflow = "hidden"
        const element = document.getElementById(CONFIRM_DELETE_DIALOG_ID);
        element.setAttribute("open", true)
    }

    // cancel the request for delete comment
    const cancelDeleteComment = () => {
        document.body.style.overflow = "auto"
        const element = document.getElementById(CONFIRM_DELETE_DIALOG_ID);
        element.removeAttribute("open")
    }

    // open update comment form
    const openUpdateDialog = () => {
        document.body.style.overflow = "hidden"
        const element = document.getElementById(UPDATE_DIALOG_ID);
        element.setAttribute("open", true)

        const inputCheckboxElementId = `my-account-activity-update-checkbox-` + props.review.audience_review_id + "-" + values.score
        const inputCheckboxElement = document.getElementById(inputCheckboxElementId)
        inputCheckboxElement.setAttribute("checked", true)
    }

    // close update comment form
    const closeUpdateDialog = () => {
        document.body.style.overflow = "auto"
        const element = document.getElementById(UPDATE_DIALOG_ID);
        element.removeAttribute("open")

        const inputCheckboxElementId = `my-account-activity-update-checkbox-` + props.review.audience_review_id + "-" + values.score
        const inputCheckboxElement = document.getElementById(inputCheckboxElementId)
        inputCheckboxElement.removeAttribute("checked")
    }

    /**
     * delete set button to busy for 1000ms
     * then close modal + allow scroll
     * then delete comment with the id
     */
    const deleteComment = () => {
        const elementBig = document.getElementById(CONFIRM_DELETE_DIALOG_ID);
        const elementButton = document.getElementById(CONFIRM_DELETE_DIALOG_ID);

        elementButton.setAttribute("aria-busy", true)
        setTimeout(() => {
            elementButton.removeAttribute("aria-busy")
            elementBig.removeAttribute("open")
            document.body.style.overflow = "auto"
        }, 1000)

        props.deleteReviewOne(props.review.audience_review_id, props.review.movie_id)
    }

    // print stars
    function printStars(numStars) {
        const wholeNumberPart = Math.floor(numStars);

        const starElements = [];
        for (let i = 0; i < wholeNumberPart; i++) {
            starElements.push(
            <span key={i} className="material-symbols-outlined">
                star
            </span>
            );
        }

        return starElements;
    }

    return (
        <>
            <dialog id={UPDATE_DIALOG_ID}>
                <article>
                    <h2>Updating review for {props.movieTitle}</h2>          
                    <div className='login-dialog-content-form'>
                        <form onSubmit={handleSubmit} noValidate id="audience-review-dialog-form">
                            <fieldset>
                                Rating *
                                <label for={UPDATE_DIALOG_CHECKBOX_ID_1} className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id={UPDATE_DIALOG_CHECKBOX_ID_1} name="score" value="1" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(1)
                                        }
                                    </div>
                                </label>
                                <label for={UPDATE_DIALOG_CHECKBOX_ID_2} className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id={UPDATE_DIALOG_CHECKBOX_ID_2} name="score" value="2" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(2)
                                        }
                                    </div>
                                </label>
                                <label for={UPDATE_DIALOG_CHECKBOX_ID_3} className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id={UPDATE_DIALOG_CHECKBOX_ID_3} name="score" value="3" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(3)
                                        }
                                    </div>
                                </label>
                                <label for={UPDATE_DIALOG_CHECKBOX_ID_4}className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id={UPDATE_DIALOG_CHECKBOX_ID_4} name="score" value="4" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(4)
                                        }
                                    </div>
                                </label>
                                <label for={UPDATE_DIALOG_CHECKBOX_ID_5} className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id={UPDATE_DIALOG_CHECKBOX_ID_5} name="score" value="5" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(5)
                                        }
                                    </div>
                                </label>
                            </fieldset>
                            {
                                errors.score && (
                                    <p className="input-text-help input-error">{errors.score}</p>
                                )
                            }
                            <label for="comment">
                                Comment *
                                <textarea autoComplete="off" id="comment" name="comment" placeholder="Enter your comment..." 
                                value={values.comment || ''} onChange={handleChange} required rows="3"
                                aria-invalid={`${errors.username && 'true'}`}/>
                                {
                                    errors.comment && (
                                        <p className="input-text-help input-error">{errors.comment}</p>
                                    )
                                }
                            </label>
                            <div className="my-account-profile-confirm-delete-buttons my-account-profile-header-delete">
                                <button type="button" class="secondary outline" className='dialog-form-cancel' 
                                onClick={closeUpdateDialog}>
                                    <span>Cancel</span>
                                </button>
                                <button type="submit" class="contrast" id={UPDATE_DIALOG_SUBMIT_BUTTON} 
                                className='dialog-form-submit'>
                                    <span>Post</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </article>
            </dialog>
            <dialog id={CONFIRM_DELETE_DIALOG_ID}>
                <article>
                    <h3>Delete this comment?</h3>
                    <div className="my-account-profile-confirm-delete-buttons my-account-profile-header-delete">
                        <button class="secondary outline" onClick={cancelDeleteComment}>
                            <span>Cancel</span>
                        </button>
                        <button class="contrast" id="my-account-profile-confirm-delete-confirm" onClick={deleteComment}>
                            <span>Confirm</span>
                        </button>
                    </div>
                </article>
            </dialog>
            <div className='my-account-activity-list-item'>
                <article>
                    <h4 className='my-account-activity-list-item-movie audience-review-list-item-user'>{props.movieTitle}</h4>
                    <span className='my-account-activity-list-item-date audience-review-list-item-small-email'>{props.review.updatedAt}</span>
                    <div className="card_stars">
                        {   
                            printStars(props.review.score)
                        }
                    </div>
                    <div className="audience-review-list-item-comment">
                        <span className='audience-review-list-item-comment-span'>{props.review.comment}</span>
                    </div>
                    <div className="my-account-profile-confirm-delete-buttons my-account-profile-header-delete">
                        <button class="secondary outline" id="audience-review-dialog-form-cancel-post"
                        onClick={openUpdateDialog}>
                            <span>Update</span>
                        </button>
                        <button type="submit" class="contrast" id="audience-review-dialog-form-confirm-post"
                        onClick={confirmDeleteComment}>
                            <span>Delete</span>
                        </button>
                    </div>
                </article>
            </div>
        </>
    )
}

export default MyAccountActivityCard