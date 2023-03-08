import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import routes from '../../Routes/routes';

//import dashboard layouts
import Header from './Header';
import Sidebar from './Sidebar';

const MasterLayout = () => {
  return (
    <div className='font-nunito bg-gray-100'>
        <div className="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-600">
          <Header />
        </div>
        <div className="flex flex-row flex-wrap h-screen">
          <Sidebar />
          <>
            <Routes>
              {
                routes.filter(route => route.component)
                .map(({path, component: Component}, idx) => (
                  <Route key={idx} path={path} element={<Component />} />
                ))
              }
              <Route path='/' element={<Navigate to='/admin/dashboard' />} />
            </Routes>
          </>
        </div>
    </div>
  )
}

export default MasterLayout