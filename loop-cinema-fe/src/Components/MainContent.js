import { Route, Routes, useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Home from "../Pages/Home";
import "../css/components/MainContent.css"
import MyAccount from "../Pages/MyAccount"
import Test from "./Test";
import { getCurrentUserId, removeCurrentUserId } from "../data/userRepo";
import { useState, useEffect } from "react";

const MainContent = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // reload page got the login successfully message
    const [isTemporaryMessage, setIsTemporaryMessage] = useState(false);

    useEffect(() => {
        const userId = getCurrentUserId()
        if (userId === null) { 
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
            setIsTemporaryMessage(true)
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (isTemporaryMessage !== false) {
            setTimeout(() => {
                setIsTemporaryMessage(false)
            }, 2000)
        }
    }, [isTemporaryMessage])
    
    const signOut = () => {
        if (isLoggedIn) {
            removeCurrentUserId()
            setIsLoggedIn(false)
            navigate("/")
        }
    }

    return (
        <>
            <div className="main-content">
                <HeaderNav setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} 
                setIsTemporaryMessage={setIsTemporaryMessage} isTemporaryMessage={isTemporaryMessage} signOut={signOut} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/account" element={<MyAccount isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

                    {/* test component routes */}
                    <Route path="/test" element={<Test />} />
                </Routes>
            </div>     
        </>
    )
}

export default MainContent;