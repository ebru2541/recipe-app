import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import { GlobalStyle } from "../style/GlobalStyle";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route
          path="/login"
          element={
            <Login />
          }
        />

        <Route path="/" element={<PrivateRouter />}>
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail" element={<Detail />} />
            </>
          ) : (
            <Navigate to="/login" />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
