import React, { useState } from 'react';

//import react icon
import { TiTimesOutline } from 'react-icons/ti'
import { MdSpaceDashboard, MdVerifiedUser } from 'react-icons/md';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
 
//import react router
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const [active, setActive] = useState('dashboard');
  const [catDrop, setCatDrop] = useState(true);

  return (
    <div className='relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl'>
      <div className="flex flex-col">
        
        <div class="text-right hidden md:block mb-4">
          <button className='text-2xl text-sky-500'>
            <TiTimesOutline />
          </button>
        </div>

        <p className='uppercase text-xs text-gray-600 mb-4 tracking-wider'>dashboard</p>

        <Link to='/admin/dashboard' onClick={() => setActive('dashboard')} className={active === 'dashboard' ? 'sidebarActive' : 'mb-3 text-1xl flex items-center gap-2 px-2 rounded py-2 capitalize font-medium hover:text-teal-600 hover:bg-gray-700 transition ease-in-out duration-500'}>
          <MdSpaceDashboard />
          Dashboard
        </Link>

        <p className='uppercase text-xs text-gray-600 mb-4 tracking-wider'>Category</p>
        <div onClick={() => setCatDrop(!catDrop)}>
          <div onClick={() => setActive('category')} className={active === 'category' ? 'sidebarActive relative' : 'mb-3 relative text-1xl flex items-center gap-2 px-2 rounded py-2 capitalize font-medium hover:text-teal-600 hover:bg-gray-700 transition ease-in-out duration-500'}>
            <div> <MdSpaceDashboard /> </div>
            <div>Category</div>

            <div className='absolute right-1.5'>
              {catDrop ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>

          </div>
          <div className={catDrop ? 'hidden -translate-x-90' : 'pl-4 pr-2 overflow-hidden transition-all transform translate translate-x-0 duration-300 list-none'}>
            <ul class="flex flex-col mt-2 pl-2 text-gray-500 border-l border-gray-700 space-y-1 text-xs transition-all duration-500 ease-in-out">
              <li class="text-sm text-gray-500 ">
                <Link to="#" class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">
                    <div>All Category </div>
                </Link>
              </li>
              <li class="text-sm text-gray-500 ">
                <Link to="#" class="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">
                    <div> Add Category </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className='uppercase text-xs text-gray-600 my-4 tracking-wider'>User</p>
        <Link to='/admin/profile' onClick={() => setActive('profile')} className={active === 'profile' ? 'sidebarActive' : 'mb-3 text-1xl flex items-center gap-2 px-2 rounded py-2 capitalize font-medium hover:text-teal-600 hover:bg-gray-700 transition ease-in-out duration-500'}>
          <MdVerifiedUser />
          Profile
        </Link>
      </div>
    </div>
  )
}

export default Sidebar