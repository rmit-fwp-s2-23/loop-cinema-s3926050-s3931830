import { useEffect, useState } from "react";
import "../css/pages/MyAccount.css"
import { getCurrentUserId, getUserByUserId } from "../data/userRepo";
import { useNavigate } from "react-router-dom";
import MyAccountCardItem from "../Components/Fragments/MyAccountCardItem";
import axios from "axios";

const MyAccount = (props) => {
    const navigate = useNavigate()
    const userId = JSON.parse(getCurrentUserId())

    // check if user is logged in by check localStorage current user id
    useEffect(() => {
        if (userId === null) navigate("/home")
    }, [userId])

    const [currentUser, setCurrentUser] = useState({})

    // useEffect(() => {
    //     setCurrentUser(getUserByUserId(userId))
    // }, [])

    useEffect(() => {
        axios.get(`http://localhost:3001/api/users/user/${userId}`)
        .then(response => {
            if (response.data !== null) {
                response.data.createdAt = response.data.createdAt.slice(0,10)
                setCurrentUser(response.data);
            }  
        })
    }, [])

    return (
        <>
            <div className="my-account">
                <div className="my-account-greeting">
                    <article>
                        <h2>Hi {currentUser.userFirstName}</h2>
                        <div className="my-account-greeting-item">
                            <span>Available Points</span>
                            <span>{currentUser.userPoint}</span>
                        </div>
                        <div className="my-account-greeting-item">
                            <span>Account Created Date</span>
                            <span>{currentUser.createdAt}</span>
                        </div>
                        <div className="my-account-greeting-item">
                            <span>Member Status</span>
                            <span>Active</span>
                        </div>
                    </article>
                </div>
                <div className="my-account-tabs grid">
                    <MyAccountCardItem title={"My Dashboard"} img={"dashboard"} navigateTo={props.navigateMyAccount}
                    desc={"View Looper points and manage activities along with profile information."} />
                    <MyAccountCardItem title={"My Profile"} img={"profile"} navigateTo={props.navigateMyAccountProfile}
                    desc={"Manage your personal details, Looper account and preferences."} />
                    <MyAccountCardItem title={"My Activity"} img={"activity"} navigateTo={props.navigateMyAccountActivity}
                    desc={"Track your past activities and comments on movies in Loop Cinema."} />
                </div>
            </div>
        </>
    )
}

export default MyAccount;