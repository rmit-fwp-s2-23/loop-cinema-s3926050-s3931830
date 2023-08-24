import { Route, Routes } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Home from "../Pages/Home";
import "../css/components/MainContent.css"
import MyAccount from "../Pages/MyAccount"
import Test from "./Test";
import { getCurrentUserId } from "../data/userRepo";
import { useState } from "react";

const MainContent = () => {

    return (
        <>
            <div className="main-content">
                <HeaderNav />
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