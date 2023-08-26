import { useEffect, useState } from "react";
import "../css/pages/MyAccount.css"
import { getCurrentUserId, getUserByUserId } from "../data/userRepo";
import { useNavigate } from "react-router-dom";
import MyAccountCardItem from "../Components/Fragments/MyAccountCardItem";

const MyAccount = (props) => {
    const navigate = useNavigate()
    const userId = getCurrentUserId()

    useEffect(() => {
        if (userId === null) navigate("/home")
    }, [userId])

    const [currentUser, setCurrentUser] = useState(getUserByUserId(userId))

    return (
        <>
            <div className="my-account">
                <div className="my-account-greeting">
                    <article>
                        <h2>Hi {currentUser.firstName}</h2>
                    </article>
                </div>
                <div className="my-account-tabs grid">
                    <MyAccountCardItem title={"My Dashboard"} img={"dashboard"}
                    desc={"View Looper points and manage activities along with profile information."} />
                    <MyAccountCardItem title={"My Profile"} img={"profile"}
                    desc={"Manage your personal details, Looper membership and preferences."} />
                    <MyAccountCardItem title={"My Activity"} img={"activity"}
                    desc={"Track your past activities and comments on movies in Loop Cinema."} />
                </div>
            </div>
        </>
    )
}

export default MyAccount;