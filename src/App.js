import React from 'react';
// import Routes from "./Routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./pages/Faqpage";
import Home from "./pages/Homepage";
import Productdetail from "./pages/Productdetailpage";

function App() {
  console.log("APP");
  return (
    <div className="App">
      
      <BrowserRouter> 
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path="/faq" exact element={<Faq />} />  
            <Route path="productdetail/:id" exact element={<Productdetail />} />               
        </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
