import React, { useState } from 'react'

//reatc router
import { Link, useNavigate } from 'react-router-dom';

//import icons
import { FcGoogle } from 'react-icons/fc';
import Navbar from '../Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {

  const navigate = useNavigate();

  const [userDetials, setUserDetials] = useState({
    'name' : '',
    'email' : '',
    'password' : '',
    'errors' : []

  });

  const handleRegister = (event) => {
    event.persist();
    setUserDetials({...userDetials, [event.target.name] : event.target.value});
  }

  const registerSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: userDetials.name,
      email: userDetials.email,
      password: userDetials.password

    }

    axios.get('/sanctum/csrf-cookie').then(response => {
    
      axios.post(`/api/register`, data).then((res) => {
        if(res.data.status === 200){
          localStorage.setItem('auth_token', res.data._Token);
          localStorage.setItem('auth_name', res.data.username);
          toast.success(res.data.message);
          navigate('/home');
        }else{
          setUserDetials({...userDetials, errors: res.data.validation_error})
        }
      });
        
    });

  }


  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-16 flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="w-full px-16">
            <h2 className="font-bold text-2xl text-primary">Create Account</h2>

            <form onSubmit={registerSubmit} className="flex flex-col gap-4 w-full">
              <input className="p-2 mt-8 rounded-xl border" type="text" name="name" onChange={handleRegister} value={userDetials.name} placeholder="Name" />
              <span className='text-red-400 font-semibold texr-sm'>{userDetials.errors.name}</span>
              
              <input className="p-2 rounded-xl border" type="email" name="email" onChange={handleRegister} value={userDetials.email} placeholder="Email" />
              <span className='text-red-400 font-semibold texr-sm'>{userDetials.errors.email}</span>
              
              <div className="relative">
                  <input className="p-2 rounded-xl border w-full" type="password" name="password" onChange={handleRegister} value={userDetials.password} placeholder="Password" />
                  <span className='text-red-400 font-semibold mt-2 texr-sm'>{userDetials.errors.password}</span>
              </div>
              <button className="bg-red-400 rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <FcGoogle className='text-2xl mr-3' />
              Register with Google
            </button>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Already You Have Create Acnount ?</p>
              <Link to='/login'><button className="py-2 px-5 ml-2 bg-white border rounded-xl hover:scale-110 duration-300">Login</button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register