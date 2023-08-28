import '../../css/AudienceReviewCardItem.css'

/**
 * review card item in movie page
 */
const AudienceReviewCardItem = (props) => {
    function printStars(numStars) {
        const wholeNumberPart = Math.floor(numStars);
        const decimalPart = numStars - wholeNumberPart;

        const starElements = [];
        for (let i = 0; i < wholeNumberPart; i++) {
            starElements.push(
            <span key={i} className="material-symbols-outlined">
                star
            </span>
            );
        }

        if(decimalPart > 0){
            starElements.push(
            <span key={wholeNumberPart} className="material-symbols-outlined">
                star_half
            </span>
            );
        }
        return starElements;
    }

    return (
        <>
            <div className="audience-review-list-item">
                <h4 className="audience-review-list-item-user">{props.user.firstName + " " + props.user.lastName}</h4>
                <div className="audience-review-list-item-small">
                    <span className='audience-review-list-item-small-email'>{props.user.email}</span>
                    <img src={process.env.PUBLIC_URL + '/Images/black-circle.png'} className='audience-review-list-item-small-dot' />
                    <span className='audience-review-list-item-small-email'>{props.review.createdAt}</span>
                </div>
                <div className="card_stars">
                {   
                    printStars(props.review.score)
                }
                </div>
                <div className="audience-review-list-item-comment">
                    <span className='audience-review-list-item-comment-span'>{props.review.comment}</span>
                </div>
            </div>
        </>
    )
}

export default AudienceReviewCardItem