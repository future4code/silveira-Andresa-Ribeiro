import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedPage } from "../Pages/Feed/FeedPage";
import { Login } from "../Pages/Login/Login";
import { SignUp } from "../Pages/SignUp/SignUp";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/pizza" element={<FeedPage />} />                
            </Routes>
        </BrowserRouter>
    )
}