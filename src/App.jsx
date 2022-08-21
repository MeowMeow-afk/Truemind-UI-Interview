import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { NavBar } from "./Components";
// Pages
import { Home, Cart } from "./Pages";
function App() {
  return (
    <BrowserRouter>
      <div className="mutualFund">
        <NavBar />
        {/* <div className="mututalFund__section2"> */}
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
