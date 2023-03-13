import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from "../components/nav/Navbar"
const PrivateRouter = () => {
  const user=sessionStorage.getItem("user") || false
  return user ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRouter