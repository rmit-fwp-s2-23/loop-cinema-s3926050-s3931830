import React, { useEffect, useState } from 'react'
import { getSessionById, updateSession } from '../data/sessionRepo';
import moment from 'moment';
import useForm from '../CustomHooks/useForm';
import { getCurrentUserId } from '../data/userRepo';
import { createReservation } from '../data/reservationRepo';
import { useNavigate } from 'react-router-dom';
import { toggleModal } from './Ultilities/OpenModal';


const SessionModal = (props) => {
    const [sessionDetail, setSessionDetail] = useState(null);
    const setResetSession = props.setResetSession;
    const [resetSessionDetails, setResetSessionDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const getSessionDetail = async ()=>{
            const response = await getSessionById(props.sessionID);
            setSessionDetail(response);
        }
        getSessionDetail();
    },[resetSessionDetails]);

    function removeFirstAndLastCharacters(inputString) {
        // Check if the input string has at least 2 characters
        if (inputString.length < 2) {
            return inputString; // Not enough characters to remove first and last
        }
        
        // Use the slice method to remove the first and last characters
        return inputString.slice(1, -1);
        }

    const sessionBookingSuccess = async ()=>{
        const elementBig = document.querySelector(`.${sessionDetail.sessionID}`);
        const elementButton = document.getElementById("session-booking-dialog-form-comfirm-post");

        elementButton.setAttribute("aria-busy", true)

        console.log("Starting createReservation")
        console.log(typeof getCurrentUserId());
        //Create a reservation using values.noSeats
        await createReservation({
            reservationID: "R" + moment().format('YYMMDDHHmmss'),
            reservationNumberOfSeat: values.noSeats,
            sessionID: sessionDetail.sessionID,
            userID: removeFirstAndLastCharacters(getCurrentUserId())
        });

        console.log("starting update session")
        console.log(sessionDetail.sessionID)
        //TODO: Update Session
        await updateSession({
            sessionID: sessionDetail.sessionID,
            value: {
                sessionNumberOfSeat: sessionDetail.sessionNumberOfSeat - values.noSeats
            }
        })

        setTimeout(() => {
            elementButton.removeAttribute("aria-busy")
            elementBig.removeAttribute("open")
            document.body.style.overflow = "auto"
        }, 1000)

        
        setResetSessionDetails(prev => !prev);
        setResetSession(prev => !prev);
    }

    function sessionBookingValidate(values){
        let sessionBookingErrors = {};
        if(!values.noSeats){
            sessionBookingErrors.noSeats = 'No of Seats is required';
        }else if(values.noSeats > sessionDetail.sessionNumberOfSeat){
            sessionBookingErrors.noSeats = `No of Seats should be less than ${sessionDetail.sessionNumberOfSeat}`;
        }

        return sessionBookingErrors;
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        setValues,
        isSubmitting
    } = useForm(sessionBookingSuccess, sessionBookingValidate);


    function sendToLoginPage(){
        navigate('/home');
    }

    return (
        <>
        {sessionDetail ? (
                <dialog className={`session-booking-dialog ${sessionDetail.sessionID}`} id="modal">
                    <article>
                        <hgroup>
                            <h2>Session Booking</h2>
                            <p>{sessionDetail.movie.movieTitle}</p>
                            <img  className="movie-poster" src={sessionDetail.movie.movieBanner} style={{ width: "100%"}}/>
                        </hgroup>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <hgroup>
                                    <h3>Session Day</h3>
                                    <p>{moment(sessionDetail.sessionTime).format('DD-MM-YYYY')}</p>
                                </hgroup>
                                <hgroup>
                                    <h3>Available Seats:</h3>
                                    <p>{sessionDetail.sessionNumberOfSeat}</p>
                                </hgroup>
                                {props.isLoggedIn ? (
                                        <>
                                            <label style={{paddingBottom: "2vh"}}>Enter No of Seats:
                                                <input type="number" id="numberInput" name="noSeats" onChange={handleChange}
                                                placeholder='Enter no of Seats...'></input>
                                                {
                                                    errors.noSeats && (
                                                        <p className="input-text-help input-error">{errors.noSeats}</p>
                                                    )
                                                }
                                            </label>
                                            <div className="footer-buttons" style={{display: "flex", flexFlow: "row-reverse", columnGap: "2vh"}}>
                                                <button type="submit" id="session-booking-dialog-form-comfirm-post" >
                                                    Book
                                                </button>
                                                <button type="button" data-sessionid={sessionDetail.sessionID} onClick={props.closeSessionModal} class="secondary outline">
                                                    Cancel
                                                </button>
                                            </div>
                                        </>
                                    ):( 
                                        <div className="footer-buttons" style={{display: "flex", flexFlow: "row-reverse", columnGap: "2vh"}}>
                                            <button type="button" id="session-booking-login-button" onClick={sendToLoginPage}>Log In</button>
                                        </div>
                                    )
                                }   
                            </form>
                        </div>
                    </article>
                </dialog>
            ):(
                <h2>Loading Session Detail....</h2>
            )}
            </>
    )
}

export default SessionModal