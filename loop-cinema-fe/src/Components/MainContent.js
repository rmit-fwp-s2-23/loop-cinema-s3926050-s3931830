import { Route, Routes } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Home from "../Pages/Home";
import "../css/components/MainContent.css"
import MyAccount from "../Pages/MyAccount"

const MainContent = () => {
    return (
        <>
            <div className="main-content">
                <HeaderNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/account" element={<MyAccount />} />
                </Routes>
            </div>     
        </>
    )
}

export default MainContent;