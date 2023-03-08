import React, { useState } from 'react'

//immage import
import profileImage from '../../assets/img/avatar.jpg';

//import react icons
import { IoIosArrowDown, IoIosArrowUp, IoMdLogOut } from 'react-icons/io';
import {HiBars3CenterLeft, HiOutlineInboxArrowDown} from 'react-icons/hi2'
import { FaBell, FaFacebookMessenger, FaRegUser } from 'react-icons/fa';

//import react router dom
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const Header = () => {

  const [dropdown, setDropdown] = useState(false);
  const [notifactioDrop, setNotifactionDrop] = useState(false);
  const [messageDrop, setMessageDrop] = useState(false);

  const navigate = useNavigate();

  const adminLogout = (e) => {
    e.preventDefault();

    axios.post(`/api/admin-logout`).then((res) => {
      if(res.data.status === 200){
          localStorage.removeItem('admin_token');
          localStorage.removeItem('admin_name');
          toast.success(res.data.message);
          navigate('/');
      }
    })
  }

  return (
    <>
    <ToastContainer />
      <div className="flex-none w-56 flex flex-row items-center">
        <span>
            <strong className='captalize ml-1 flex-1 text-lg'>Admin</strong>
        </span>
        <button className='text-gray-500 flex-none text-right hidden md:block ml-5 text-2xl'><HiBars3CenterLeft /></button>
      </div>
      <div className="animated md:hidden md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flow-row flex-wrap justify-between items-center md:flex-col md:items-center">
        <div></div>
        <div className="flex flex-row-reverse items-center">
          <div className="dropdown relative md:static">
            <button onClick={() => setDropdown(!dropdown)} className='flex flex-wrap items-center '>
              <div className="w-8 h-8 overflow-hidden rounded-full">
                <img className='w-full h-full object-cover' src={profileImage} alt="" />
              </div>
              <div className="ml-2 flex capitalize gap-2">
                <h2 className='text-sm text-gray-800 m-0 p-0 leading-none'>Admin</h2>
                {
                  dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />
                }
              </div>
            </button>
            <button class="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>
            <div className={dropdown ? 'text-gray-500 md:mt-10 md:w-full rounded bg-white shadow-md z-20 absolute right-0 w-40 mt-5 py-2 animated faster' : 'hidden'}>

              <Link to='#' className='px-4 py-2 capitalize flex items-center gap-2 font-semibold text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out'><FaRegUser /> Profile</Link>

              <Link to='#' className='px-4 py-2 capitalize flex items-center gap-2 font-semibold text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out'><HiOutlineInboxArrowDown /> Message</Link>

              <div onClick={adminLogout} className='px-4 py-2 cursor-pointer border-t-2 capitalize flex items-center gap-2 font-semibold text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out'><IoMdLogOut /> Logout</div>

            </div>
          </div>
          <div className="dropdown relative mr-5 md:static flex items-center">
            <button onClick={() => setNotifactionDrop(!notifactioDrop)} className='text-gray-300 hover:text-gray-900 m-0 p-0 focus:text-gray-900 focus:outline-none transition-all duration-300 ease-in-out relative'>
              <FaBell />
              <span className='w-2 h-2 bg-sky-400 -top-1 left-3 animate-ping right-0 absolute rounded-full'></span>
              <span className='w-2 h-2 bg-sky-500 -top-1 left-3 right-0 absolute rounded-full'></span>
            </button>
            <button class="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

            <div className={notifactioDrop ? 'rounded bg-white md:right-0 md:w-full shadow-md z-20 absolute right-0 w-80 mt-[24rem] py-2' : 'hidden'}>
              <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                <h3>notifaction</h3>
                <div className="bg-teal-100 border-teal-200 text-teal-500 text-xs rounded px-1">
                  <strong>3</strong>
                </div>
              </div>
              <hr />

              <Link to='#' className='flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                  <FaRegUser />
                </div>
                <div class="flex-1 flex flex-rowbg-green-100">
                  <div class="flex-1">
                    <h1 class="text-sm font-semibold">jassa..</h1>
                    <p class="text-xs text-gray-500">text here also</p>
                  </div>
                  <div class="text-right text-xs text-gray-500">
                    <p>78 min ago</p>
                  </div>
                </div>
              </Link>

              <Link to='#' className='flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                  <FaRegUser />
                </div>
                <div class="flex-1 flex flex-rowbg-green-100">
                  <div class="flex-1">
                    <h1 class="text-sm font-semibold">Poll..</h1>
                    <p class="text-xs text-gray-500">Guiter Master</p>
                  </div>
                  <div class="text-right text-xs text-gray-500">
                    <p>20 min ago</p>
                  </div>
                </div>
              </Link>

              <Link to='#' className='flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                  <FaRegUser />
                </div>
                <div class="flex-1 flex flex-rowbg-green-100">
                  <div class="flex-1">
                    <h1 class="text-sm font-semibold">new imag..</h1>
                    <p class="text-xs text-gray-500">text here also</p>
                  </div>
                  <div class="text-right text-xs text-gray-500">
                    <p>78 min ago</p>
                  </div>
                </div>
              </Link>
              <hr />
              <div class="px-4 py-2 mt-2">
                <Link to="#" class="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all py-2 hover:bg-gray-100 ease-in-out duration-500">
                  view all
                </Link>
            </div>
            </div>
          </div>
          <div className="dropdown relative mr-5 md:static flex items-center">
            <button onClick={() => setMessageDrop(!messageDrop)} className='text-gray-300 hover:text-gray-900 m-0 p-0 focus:text-gray-900 focus:outline-none transition-all duration-300 ease-in-out relative'>
              <FaFacebookMessenger />
              <span className='w-2 h-2 bg-pink-400 -top-1 left-3 animate-ping right-0 absolute rounded-full'></span>
              <span className='w-2 h-2 bg-pink-500 -top-1 left-3 right-0 absolute rounded-full'></span>
            </button>
            <button class="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

            <div className={messageDrop ? 'rounded bg-white md:right-0 md:w-full shadow-md z-20 absolute right-0 w-80 mt-[29rem] py-2' : 'hidden'}>
              <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                <h3>Message</h3>
                <div className="bg-teal-100 border-teal-200 text-teal-500 text-xs rounded px-1">
                  <strong>4</strong>
                </div>
              </div>
              <hr />

              <Link to='#' className='flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                  <FaRegUser />
                </div>
                <div class="flex-1 flex flex-rowbg-green-100">
                  <div class="flex-1">
                    <h1 class="text-sm font-semibold">jassa</h1>
                    <p class="text-xs text-gray-500">typing..</p>
                  </div>
                  <div class="text-right text-xs text-gray-500">
                    <p>now</p>
                  </div>
                </div>
              </Link>
              <hr />

              <Link to='#' className='flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                  <FaRegUser />
                </div>
                <div class="flex-1 flex flex-rowbg-green-100">
                  <div class="flex-1">
                    <h1 class="text-sm font-semibold">liton shah</h1>
                    <p class="text-xs text-gray-500">yeah sure 😍</p>
                  </div>
                  <div class="text-right text-xs text-gray-500">
                    <p>1min</p>
                  </div>
                </div>
              </Link>
              <hr />

              <Link to='#' className='flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                  <FaRegUser />
                </div>
                <div class="flex-1 flex flex-rowbg-green-100">
                  <div class="flex-1">
                    <h1 class="text-sm font-semibold">khadikul islam</h1>
                    <p class="text-xs text-gray-500">updated your version 🙂</p>
                  </div>
                  <div class="text-right text-xs text-gray-500">
                    <p>78 min ago</p>
                  </div>
                </div>
              </Link>
              <hr />
              <Link to='#' className='flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                  <FaRegUser />
                </div>
                <div class="flex-1 flex flex-rowbg-green-100">
                  <div class="flex-1">
                    <h1 class="text-sm font-semibold">Abedin</h1>
                    <p class="text-xs text-gray-500">Insha Allah</p>
                  </div>
                  <div class="text-right text-xs text-gray-500">
                    <p>78 min ago</p>
                  </div>
                </div>
              </Link>
              <hr />
              <div class="px-4 py-2 mt-2">
                <a href="#" class="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all py-2 hover:bg-gray-100 ease-in-out duration-500">
                  view all message
                </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header