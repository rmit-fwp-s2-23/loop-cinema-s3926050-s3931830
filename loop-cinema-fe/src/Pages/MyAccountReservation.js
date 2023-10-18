import { useNavigate } from 'react-router-dom';
import '../css/pages/MyAccountActivity.css'
import { getCurrentUserId } from '../data/userRepo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MyAccountReservationCard from '../Components/Fragments/MyAccountReservationCard';

const MyAccountReservation = (props) => {
    const navigate = useNavigate()
    const userId = JSON.parse(getCurrentUserId())

    // check if user is logged in by check localStorage current user id
    useEffect(() => {
        if (userId === null) navigate("/home")
    }, [userId])

    const [currentReservationList, setCurrentReservationList] = useState([])

    const fetchReservationsFromDatabase = async () => {
        await axios.get(`http://localhost:3001/api/reservations/user/${userId}`)
        .then(response => {
            setCurrentReservationList(response.data);
        })
    }

    // fetch data from db
    useEffect(() => {
        fetchReservationsFromDatabase()
    }, [])

    return (
        <>
            <div className="my-account-activity">
                <h2 className='my-account-activity-title'>Your reservations</h2>
                <div className='my-account-activity-list'>
                {
                    currentReservationList.length > 0 ?
                    currentReservationList.map((currentReservation) => (
                        <MyAccountReservationCard reservation={currentReservation} />
                    )) :
                    <p>You have not made any reservations!</p>
                }
                </div>
            </div>
        </>
    )
}

export default MyAccountReservation