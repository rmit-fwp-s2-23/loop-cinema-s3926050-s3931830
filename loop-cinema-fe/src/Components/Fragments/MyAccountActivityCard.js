import '../../css/MyAccountActivityCard.css'
import { deleteReviewByReviewId } from '../../data/reviewRepo';

const MyAccountActivityCard = (props) => {
    const CONFIRM_DELETE_DIALOG_ID = `my-account-activity-confirm-delete-comment-` + props.review.audience_review_id;

    // confirm message
    const confirmDeleteComment = () => {
        document.body.style.overflow = "hidden"
        const element = document.getElementById(CONFIRM_DELETE_DIALOG_ID);
        element.setAttribute("open", true)
    }

    // cancel the request for delete user
    const cancelDeleteComment = () => {
        document.body.style.overflow = "auto"
        const element = document.getElementById(CONFIRM_DELETE_DIALOG_ID);
        element.removeAttribute("open")
    }

    const deleteComment = () => {
        const elementBig = document.getElementById(CONFIRM_DELETE_DIALOG_ID);
        const elementButton = document.getElementById(CONFIRM_DELETE_DIALOG_ID);

        elementButton.setAttribute("aria-busy", true)
        setTimeout(() => {
            elementButton.removeAttribute("aria-busy")
            elementBig.removeAttribute("open")
            document.body.style.overflow = "auto"
        }, 1000)

        props.deleteReviewOne(props.review.audience_review_id)
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
                    <span className='my-account-activity-list-item-date audience-review-list-item-small-email'>{props.review.createdAt}</span>
                    <div className="card_stars">
                        {   
                            printStars(props.review.score)
                        }
                    </div>
                    <div className="audience-review-list-item-comment">
                        <span className='audience-review-list-item-comment-span'>{props.review.comment}</span>
                    </div>
                    <div className="my-account-profile-confirm-delete-buttons my-account-profile-header-delete">
                        <button class="secondary outline" id="audience-review-dialog-form-cancel-post">
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