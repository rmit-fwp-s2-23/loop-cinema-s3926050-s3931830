import { Route, Routes } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Home from "../Pages/Home";
import "../css/components/MainContent.css"
import MyAccount from "../Pages/MyAccount"
import Test from "./Test";
import { getCurrentUserId } from "../data/userRepo";
import { useState, useEffect } from "react";

const MainContent = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        if (isTemporaryMessage) {
            setTimeout(() => {
                setIsTemporaryMessage(false)
            }, 2000)
        }
    }, [isTemporaryMessage])

    return (
        <>
            <div className="main-content">
                <HeaderNav setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} 
                setIsTemporaryMessage={setIsTemporaryMessage} isTemporaryMessage={isTemporaryMessage} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/account" element={<MyAccount />} />

                    {/* test component routes */}
                    <Route path="/test" element={<Test />} />
                </Routes>
            </div>     
        </>
    )
}

export default MainContent;