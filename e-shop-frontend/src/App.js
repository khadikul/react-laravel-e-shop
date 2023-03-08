import React from "react";

//react tostify css
import 'react-toastify/dist/ReactToastify.css';

//import react router dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//error page component
import Error from "./components/404";

//admin component
import AdminLogin from "./components/admin/auth/Login";

//frontent component
import Home from "./components/frontend/Home";
import Login from "./components/frontend/auth/Login";
import Register from './components/frontend/auth/Register'

//import admin dashboard layouts
import MasterLayout from "./layouts/admin/MasterLayout";

//csrf token
import axios from "axios";
import AdminPrivateRoute from "./AdminProtected";
axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

//barer token
axios.interceptors.request.use(function(config){

  const token = localStorage.getItem('auth_token') || localStorage.getItem('admin_token');

  if(token === 'auth_token'){
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }else{
    
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  return config;

});


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* user routes */}
        <Route path='/' element={localStorage.getItem('auth_token') ? <Navigate to='/home' /> : <Home />} />
        <Route path='/home' element={localStorage.getItem('auth_token') ? <Home /> : <Navigate to='/' /> } />
        <Route path='/login' element={localStorage.getItem('auth_token') ? <Navigate to='/home' /> : <Login />} />
        <Route path='/register' element={localStorage.getItem('auth_token') ? <Navigate to='/home' /> : <Register />} />

        {/* admin routes */}
        <Route path="/admin/*" element={<AdminPrivateRoute><MasterLayout /></AdminPrivateRoute>} />
        <Route path="/admin/login" element={localStorage.getItem('admin_token') ? <Navigate to='/admin/dashboard' /> : <AdminLogin />} />

        {/* error page routes */}
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
