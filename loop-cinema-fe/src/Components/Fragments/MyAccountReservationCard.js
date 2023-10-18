import 'react-quill/dist/quill.snow.css';

/**
 * review card item in my account activity page
 */
const MyAccountReservationCard = (props) => {
    return (
        <>
            <div className='my-account-activity-list-item'>
                <article>
                    <h4 className='my-account-activity-list-item-movie audience-review-list-item-user'>
                        Reservation for: {props.reservation.session.movie.movieTitle}
                    </h4>
                    <span className='my-account-activity-list-item-date audience-review-list-item-small-email'>
                        {props.reservation.updatedAt.slice(0,10)}
                    </span>
                    <div className="card_stars">
                        <span className='audience-review-list-item-comment-span'>
                            <strong>Number of seats:</strong> {props.reservation.reservationNumberOfSeat}
                        </span>
                    </div>
                    {/* <div className="audience-review-list-item-comment">
                        <span className='audience-review-list-item-comment-span'>
                            <strong>Number of seats:</strong> {props.reservation.reservationNumberOfSeat}
                        </span>
                    </div> */}
                    <div className="audience-review-list-item-comment">
                        <span className='audience-review-list-item-comment-span'>
                            <strong>Session time:</strong> {props.reservation.session.sessionTime.slice(0,10)} at {props.reservation.session.sessionTime.slice(11,19)}
                        </span>
                    </div>
                    <div className="audience-review-list-item-comment">
                        <span className='audience-review-list-item-comment-span'>
                            <strong>Location:</strong> {props.reservation.session.location.locationName} - {props.reservation.session.location.locationAddress}
                        </span>
                    </div>
                </article>
            </div>
        </>
    )
}

export default MyAccountReservationCard