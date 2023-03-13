import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const user=sessionStorage.getItem("user") || false
  return (
    user ? <Home/> : <Navigate to="/login"/>
  )
}

export default PrivateRouter