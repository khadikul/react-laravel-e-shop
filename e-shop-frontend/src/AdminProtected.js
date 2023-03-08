import React from 'react'

//import react router
import { Navigate, useLocation } from 'react-router-dom'

const AdminPrivateRoute = ({children}) => {
  const token = localStorage.getItem('admin_token');

  let location = useLocation();
  if(!token){
    return <Navigate to='/admin/login' state={{from: location}} replace />
  } 

  return children
}

export default AdminPrivateRoute