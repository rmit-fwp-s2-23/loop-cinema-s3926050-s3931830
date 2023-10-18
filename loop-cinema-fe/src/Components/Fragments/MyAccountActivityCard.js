import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import useForm from '../../CustomHooks/useForm';
import ReviewValidate from '../../Validations/ReviewValidate';
import '../../css/MyAccountActivityCard.css'
import ReactQuill from 'react-quill';
import UpdateReviewValidate from '../../Validations/UpdateReviewValidate';

/**
 * review card item in my account activity page
 */
const MyAccountActivityCard = (props) => {
    const CONFIRM_DELETE_DIALOG_ID = `my-account-activity-confirm-delete-comment-` + props.review.audienceReviewID;
    const UPDATE_DIALOG_ID = `my-account-activity-update-comment-` + props.review.audienceReviewID;
    const UPDATE_DIALOG_SUBMIT_BUTTON = `my-account-activity-update-comment-submit-` + props.audienceReviewID;

    const UPDATE_DIALOG_CHECKBOX_ID_1 = `my-account-activity-update-checkbox-` + props.review.audienceReviewID + "-1";
    const UPDATE_DIALOG_CHECKBOX_ID_2 = `my-account-activity-update-checkbox-` + props.review.audienceReviewID + "-2";
    const UPDATE_DIALOG_CHECKBOX_ID_3 = `my-account-activity-update-checkbox-` + props.review.audienceReviewID + "-3";
    const UPDATE_DIALOG_CHECKBOX_ID_4 = `my-account-activity-update-checkbox-` + props.review.audienceReviewID + "-4";
    const UPDATE_DIALOG_CHECKBOX_ID_5 = `my-account-activity-update-checkbox-` + props.review.audienceReviewID + "-5";

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
    } = useForm(updateSuccess, UpdateReviewValidate);

    // initialize first time values from localStorage
    useEffect(() => {
        // console.log(props.review);
        setValues({...props.review})
        // console.log(values);
    }, [])

    const [aRComment, setARComment] = useState(props.review.audienceReviewComment);
    const changeARComment = (event) => {
        setARComment(event)
        setValues(values => ({ ...values, audienceReviewComment: event }));
    }

    useEffect(() => {
        if (JSON.stringify(errors) === JSON.stringify({}) && isSubmitting) {
            const elementBig = document.getElementById(UPDATE_DIALOG_ID);
            const elementButton = document.getElementById(UPDATE_DIALOG_SUBMIT_BUTTON);

            elementButton.setAttribute("aria-busy", true)
            setTimeout(() => {
                elementButton.removeAttribute("aria-busy")
                const inputCheckboxElementId = `my-account-activity-update-checkbox-` + props.review.audienceReviewID + "-" + values.audienceReviewScore
                const inputCheckboxElement = document.getElementById(inputCheckboxElementId)
                inputCheckboxElement.removeAttribute("checked")

                elementBig.removeAttribute("open")
                document.body.style.overflow = "auto"
            }, 1000)

            props.updateReviewOne(props.review.movieID)  

            // cannot update one item 2 consecutive time if not reload -> investigate further ---> not experience this problem with db
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
        console.log(values);
        console.log(aRComment);
        document.body.style.overflow = "hidden"
        const element = document.getElementById(UPDATE_DIALOG_ID);
        element.setAttribute("open", true)

        const inputCheckboxElementId = `my-account-activity-update-checkbox-` + props.review.audienceReviewID + "-" + values.audienceReviewScore
        const inputCheckboxElement = document.getElementById(inputCheckboxElementId)
        inputCheckboxElement.setAttribute("checked", true)
    }

    // close update comment form
    const closeUpdateDialog = () => {
        document.body.style.overflow = "auto"
        const element = document.getElementById(UPDATE_DIALOG_ID);
        element.removeAttribute("open")

        const inputCheckboxElementId = `my-account-activity-update-checkbox-` + props.review.audienceReviewID + "-" + values.audienceReviewScore
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

        props.deleteReviewOne(props.review.audienceReviewID, props.review.movieID)
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
                    <h2>Updating review for {props.review.movie.movieTitle}</h2>          
                    <div className='login-dialog-content-form'>
                        <form onSubmit={handleSubmit} noValidate id="audience-review-dialog-form">
                            <fieldset>
                                Rating *
                                <label for={UPDATE_DIALOG_CHECKBOX_ID_1} className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id={UPDATE_DIALOG_CHECKBOX_ID_1} name="audienceReviewScore" value="1" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(1)
                                        }
                                    </div>
                                </label>
                                <label for={UPDATE_DIALOG_CHECKBOX_ID_2} className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id={UPDATE_DIALOG_CHECKBOX_ID_2} name="audienceReviewScore" value="2" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(2)
                                        }
                                    </div>
                                </label>
                                <label for={UPDATE_DIALOG_CHECKBOX_ID_3} className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id={UPDATE_DIALOG_CHECKBOX_ID_3} name="audienceReviewScore" value="3" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(3)
                                        }
                                    </div>
                                </label>
                                <label for={UPDATE_DIALOG_CHECKBOX_ID_4}className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id={UPDATE_DIALOG_CHECKBOX_ID_4} name="audienceReviewScore" value="4" onChange={handleChange} autoComplete="off"/>
                                    <div className="card_stars">
                                        {   
                                            printStars(4)
                                        }
                                    </div>
                                </label>
                                <label for={UPDATE_DIALOG_CHECKBOX_ID_5} className="audience-review-dialog-form-label-checkbox">
                                    <input type="radio" id={UPDATE_DIALOG_CHECKBOX_ID_5} name="audienceReviewScore" value="5" onChange={handleChange} autoComplete="off"/>
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
                                {/* <textarea autoComplete="off" id="comment" name="comment" placeholder="Enter your comment..." 
                                value={values.comment || ''} onChange={handleChange} required rows="3"
                                aria-invalid={`${errors.username && 'true'}`}/> */}

                                <div id="commentReview">
                                    <ReactQuill theme="snow" id="comment" name="audienceReviewComment" 
                                    // value={values.comment || ''} onChange={setCommentOfReview}  
                                    value={aRComment} onChange={changeARComment}
                                    />
                                </div>

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
                    <h4 className='my-account-activity-list-item-movie audience-review-list-item-user'>{props.review.movie.movieTitle}</h4>
                    <span className='my-account-activity-list-item-date audience-review-list-item-small-email'>{props.review.updatedAt.slice(0,10)}</span>
                    <div className="card_stars">
                        {   
                            printStars(props.review.audienceReviewScore)
                        }
                    </div>
                    <div className="audience-review-list-item-comment">
                        <span className='audience-review-list-item-comment-span'
                        dangerouslySetInnerHTML={{__html: props.review.audienceReviewComment}} />
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