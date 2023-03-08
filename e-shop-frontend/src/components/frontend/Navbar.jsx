import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//react icons
import {AiFillCar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoIosLogOut } from 'react-icons/io';


const Navbar = () => {

    const navigate = useNavigate();

    const [mobileMenu, setMobileMenu] = useState(true);

    const logOutHandle = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then((res) => {
            if(res.data.status === 200){
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                toast.success(res.data.message);
                navigate('/');
            }
        })
    }

  return (
    <header>
        <div className='bg-white flex justify-between items-center py-4 px-[9%] relative'>
            
            <div className='font-semibold text-2xl uppercase text-gray-700'>logo</div>

            <div className='w-full max-w-xl text-gray-400 relative flex lg:hidden'>
                <div className="absolute top-3 left-4 text-lg text-gray-400">
                    <FaSearch />
                </div>
                <input type="search" className='w-full border border-primary border-r-0 pl-12 pr-3 py-2 rounded-l-md focus:outline-none' />
                <button className='bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition'>Search</button>
            </div>

            <div className='flex items-center space-x-5'>
                <div className='relative'>
                    <Link className='text-2xl text-center hover:text-red-400 transition duration-300 text-gray-700'><AiOutlineHeart /></Link>
                    <div className='text-xs text-gray-400'>Wish List</div>
                    <span className='absolute -top-1 left-5 text-center bg-red-400 w-4 h-4 inline-block rounded-full text-[.7rem] text-white'>70</span>
                </div>
                <div className='relative text-center'>
                    <Link className='text-2xl text-center hover:text-red-400 transition duration-300 text-gray-700'><AiOutlineShoppingCart /></Link>
                    <div className='text-xs text-gray-400'>Cart</div>
                    <span className='absolute -top-1 left-5 text-center bg-red-400 w-4 h-4 inline-block rounded-full text-[.7rem] text-white'>70</span>
                </div>
                <div className='text-center'>
                    {
                        localStorage.getItem('auth_token')
                        ? (
                            <>
                                <div onClick={logOutHandle} className='text-2xl cursor-pointer hover:text-red-400 transition duration-300 text-gray-700'><IoIosLogOut /></div>
                                <div className='text-xs text-gray-400'>Logout</div>

                            </>
                        ) : (
                            <>
                                <Link to='/login' className='text-2xl p-0 m-0 hover:text-red-400 transition duration-300 text-center text-gray-700'><AiOutlineUser /></Link>
                                <div className='text-xs text-gray-400'>Login</div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>

        <div className='flex items-center justify-between bg-gray-700 px-[9%]'>

            <div className='px-8 py-4 bg-primary flex items-center cursor-pointer relative group'>
                <span className='text-white text-md'>
                    <FaBars />
                </span>
                <span className='capitalize ml-2 text-white'>all category</span>
                <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible rounded-b top-full left-0 bg-white z-30 shadow-md w-full pt-3 divide-y divide-gray-300 divide-dashed'>
                    <Link className='flex items-center space-x-6 px-5 py-2 hover:bg-gray-100'>
                        <AiFillCar className='text-lg text-red-400' />
                        <span className='capitalize text-gray-400 text-md'>Car</span>
                    </Link>

                    <Link className='flex items-center space-x-6 px-5 py-2 hover:bg-gray-100'>
                        <AiFillCar className='text-red-400 text-lg' />
                        <span className='capitalize text-gray-400 text-md'>Android</span>
                    </Link>

                    <Link className='flex items-center space-x-6 px-5 py-2 hover:bg-gray-100'>
                        <AiFillCar className='text-red-400 text-lg' />
                        <span className='capitalize text-gray-400 text-md'>Laptop</span>
                    </Link>

                    <Link className='flex items-center space-x-6 px-5 py-2 hover:bg-gray-100'>
                        <AiFillCar className='text-red-400 text-lg' />
                        <span className='capitalize text-gray-400 textmd'>Desktop</span>
                    </Link>

                    <Link className='flex items-center space-x-6 px-5 py-2 hover:bg-gray-100'>
                        <AiFillCar className='text-red-400 text-lg' />
                        <span className='capitalize text-gray-400 text-md'>Iphone</span>
                    </Link>
                </div>
            </div>

            <div className='ml-auto text-white text-2xl hidden md:block' onClick={() => setMobileMenu(!mobileMenu)}>
                {
                    mobileMenu ? <FaBars /> : <FaTimes />
                }
            </div>

            <nav className="flex justify-between items-center space-x-5 text-white md:hidden">
                <Link className='hover:text-primary transition duration-300' to='/'>Home</Link>
                <Link className='hover:text-primary transition duration-300' to='/'>Shop</Link>
                <Link className='hover:text-primary transition duration-300' to='/'>Category</Link>
                <Link className='hover:text-primary transition duration-300' to='/'>My Account</Link>
                <Link className='hover:text-primary transition duration-300' to='/'>Contact</Link>
                <div className='font-semibold text-2xl hidden sm:block uppercase text-gray-700'>logo</div>
            </nav>
        </div>

    </header>
  )
}

export default Navbar