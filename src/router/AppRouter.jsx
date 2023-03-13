import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import { GlobalStyle } from "../style/GlobalStyle";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <Navbar /> */}
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route>
          {/* <Route path="/about" element={<About />} />
          <Route path="/navbar" element={<Navbar />} /> */}
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
