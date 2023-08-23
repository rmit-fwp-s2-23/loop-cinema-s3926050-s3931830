import { Route, Routes } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Home from "../Pages/Home";
import "../css/components/MainContent.css"
import MyAccount from "../Pages/MyAccount"
import LoginForm from "./LoginForm";

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
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </div>     
        </>
    )
}

export default MainContent;