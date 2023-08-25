import { useEffect, useState } from "react";
import "../css/pages/MyAccount.css"
import { getCurrentUserId, getUserByUserId } from "../data/userRepo";
import { useNavigate } from "react-router-dom";

// need to perform validation letting users to access this url
const MyAccount = (props) => {
    const navigate = useNavigate()
    if (!props.isLoggedIn) navigate("/")
    
    const userId = getCurrentUserId()
    console.log(userId === null);
    if (userId === null) {
        console.log("ok");
        navigate("/home")
    }

    const [currentUser, setCurrentUser] = useState(getUserByUserId(userId))

    return (
        <p>{JSON.stringify(currentUser)}</p>
    )
}

export default MyAccount;