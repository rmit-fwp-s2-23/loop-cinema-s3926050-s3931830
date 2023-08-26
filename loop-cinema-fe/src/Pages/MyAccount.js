import { useEffect, useState } from "react";
import "../css/pages/MyAccount.css"
import { getCurrentUserId, getUserByUserId } from "../data/userRepo";
import { useNavigate } from "react-router-dom";

const MyAccount = (props) => {
    const navigate = useNavigate()
    const userId = getCurrentUserId()

    useEffect(() => {
        if (userId === null) navigate("/home")
    }, [userId])

    const [currentUser, setCurrentUser] = useState(getUserByUserId(userId))

    return (
        <p>{JSON.stringify(currentUser)}</p>
    )
}

export default MyAccount;