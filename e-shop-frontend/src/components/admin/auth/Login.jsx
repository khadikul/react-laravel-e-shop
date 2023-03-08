import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {

    const [admin, setAdmin] = useState({
        email: '',
        password: '',
        error: '',
        error_list: []
    });

    const navigate = useNavigate();

    const adminLoginHandle = (e) => {
        e.persist();

        setAdmin({...admin, [e.target.name] : e.target.value});
    }

    const adminLoginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: admin.email,
            password: admin.password
        }

        axios.get(`/sanctum/csrf-cookie`).then((res) => {
            axios.post(`/api/admin-login`, data).then((res) => {
                if(res.data.status === 200){

                    localStorage.setItem('admin_token', res.data._Token);
                    localStorage.setItem('admin_name', res.data.adminName);
                    toast.success(res.data.message);
                    navigate('/admin');
          
                }else if(res.data.status === 401){
          
                    setAdmin({...admin, error: res.data.message});
          
                }else{
          
                    setAdmin({...admin, error_list: res.data.validation_errors});
                    
                }
            })
        })
    }

  return (
    <div className='flex items-center justify-center h-screen bg-purple-100'>
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <div class="w-full px-10">
                <h2 class="font-bold text-2xl text-[#002D74]">Admin Login</h2>

                <form onSubmit={adminLoginSubmit} class="flex flex-col gap-4">
                    <span className='text-red-400 text-xs py-2'>{admin.error}</span>
                    <input class="p-2 px-8 mt-8 rounded-xl border" type="email" name="email" onChange={adminLoginHandle} value={admin.email} placeholder="Email" />
                    <span className='text-red-400 text-xs'>{admin.error_list.email}</span>
                    <div class="relative">
                        <input class="p-2 px-8 rounded-xl border w-full" type="password" name="password" onChange={adminLoginHandle} value={admin.password} placeholder="Password" />
                        <span className='text-red-400 text-xs'>{admin.error_list.password}</span>
                    </div>
                    <button class="bg-[#002D74] rounded-xl text-white py-2 px-8 hover:scale-105 duration-300">Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin