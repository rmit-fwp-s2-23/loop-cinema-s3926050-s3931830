import { useEffect, useState } from "react";
import "../css/pages/MyAccount.css"
import { getCurrentUserId } from "../data/userRepo";
import { useNavigate } from "react-router-dom";

// need to perform validation letting users to access this url
const MyAccount = () => {
    // const navigate = useNavigate()
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    // useEffect(() => {
    //     const userId = getCurrentUserId()
    //     console.log(userId);
    //     if (userId === null) {
    //         navigate("/")
    //     } else {
            
    //     }
    // }, [isLoggedIn])

    return (
        <h1 className="myaccount-test">This is my account</h1>
    )
}

export default MyAccount;