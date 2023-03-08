import React, { useState } from 'react'

//import react router
import { Link, useNavigate } from 'react-router-dom'

//import icon
import {FcGoogle} from 'react-icons/fc';
import Navbar from '../Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: '',
    error: [],
    errors: ''
  });

  const loginHandle = (e) => {
    e.persist();

    setLogin({...login, [e.target.name] : e.target.value});
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: login.email,
      password:  login.password
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/login`, data).then((res) => {
        if(res.data.status === 402){
          setLogin({...login, errors: res.data.validation})
        }else{
          if(res.data.status === 200){
            localStorage.setItem('auth_token', res.data._Token);
            localStorage.setItem('auth_name', res.data.username);
            toast.success(res.data.message);
            navigate('/home');
          }else{
            setLogin({...login, error: res.data.validation_error});
          }
        }
      })

    });

  }

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 flex py-16 items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl sm:mx-w-2xl p-5 items-center">
            <div className="w-full px-16">
              <h2 className="font-bold text-2xl text-primary">Login</h2>
              <p className="text-xs mt-4 text-red-400">{login.errors}</p>

              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4 w-full">
                <input className="p-2 mt-8 rounded-xl border" type="email" name="email" onChange={loginHandle} value={login.email} placeholder="Email" />
                <span className='text-xs text-red-400'>{login.error.email}</span>
                <div className="relative">
                  <input className="p-2 rounded-xl border w-full" type="password" name="password" onChange={loginHandle} value={login.password} placeholder="Password" />
                  <span className='text-xs text-red-400'>{login.error.password}</span>
                </div>
                <button className="bg-red-400 rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
              </form>

              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>

              <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                <FcGoogle className='text-2xl mr-3' />
                Login with Google
              </button>

              <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                <Link to="#">Forgot your password?</Link>
              </div>

              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Don't have an account?</p>
                <Link to='/register'><button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button></Link>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Login