import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./pages/Faqpage";
import Home from "./pages/Homepage";

const Pageroutes = () => {
    {console.log("Hello")}
    <BrowserRouter> 
        <Routes>
        {console.log("OK")}
            <Route path='/' exact element={<Home />} />
            <Route path="/faq" exact element={<Faq />} />                 
        </Routes>
    </BrowserRouter>
};

export default Pageroutes;