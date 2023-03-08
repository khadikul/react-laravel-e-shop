import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts'

//import react icon
import { GiMoneyStack } from 'react-icons/gi';
import {BsCartPlusFill} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdSupervisedUserCircle} from 'react-icons/md'

const Dashboard = () => {

    const [totalSellSeries, setTotalSellSeries] = useState([{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 200]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],);

    const [totalSellOptions, setTotalSellOptions] = useState({
        chart: {
          height: 150,
          type: 'area',
          toolbar: {
            show: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
    },);

    const [totalViewSeries, setTotalViewSeries] = useState([{
        name: 'series1',
        data: [31, 100, 280, 510, 420, 109, 800]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],);

    const [totalViewOptions, setTotalViewOptions] = useState({
        chart: {
          height: 150,
          type: 'area',
          toolbar: {
            show: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
    },);

  return (
    <div className='bg-gray-100 flex-1 p-6 md:mt-16'>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-1 lg:grid-cols-2">
            <div class="report-card">
                <div class="card">
                    <div class="card-body flex flex-col"> 
                        <div class="flex flex-row justify-between items-center">
                            <div class="h-6 text-3xl text-indigo-700"><GiMoneyStack /></div>
                            <span class="rounded-full flex items-center gap-2 text-white badge bg-teal-400 p-1 text-sm">
                                80%
                                <MdOutlineKeyboardArrowUp className='text-xl' />
                            </span>
                        </div>

                        <div class="mt-8">
                            <h1 class="h5 num-4 font-semibold">$200k</h1>
                            <p>balance</p>
                        </div>                
                    </div>
                </div>
                <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>

            <div class="report-card">
                <div class="card">
                    <div class="card-body flex flex-col"> 
                        <div class="flex flex-row justify-between items-center">
                            <div class="h-6 text-3xl text-fuchsia-400"><GiMoneyStack /></div>
                            <span class="rounded-full flex items-center gap-2 text-white badge bg-fuchsia-500 p-1 text-sm">
                                10%
                                <MdOutlineKeyboardArrowUp className='text-xl' />
                            </span>
                        </div>

                        <div class="mt-8">
                            <h1 class="h5 num-4 font-semibold">20k</h1>
                            <p>total product</p>
                        </div>                
                    </div>
                </div>
                <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>

            <div class="report-card">
                <div class="card">
                    <div class="card-body flex flex-col"> 
                        <div class="flex flex-row justify-between items-center">
                            <div class="h-6 text-2xl text-pink-400"><BsCartPlusFill /></div>
                            <span class="rounded-full flex items-center gap-2 text-white badge bg-pink-400 p-1 text-sm">
                                8%
                                <MdOutlineKeyboardArrowDown className='text-xl' />
                            </span>
                        </div>

                        <div class="mt-8">
                            <h1 class="h5 num-4 font-semibold">800</h1>
                            <p>new order</p>
                        </div>                
                    </div>
                </div>
                <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>

            <div class="report-card">
                <div class="card">
                    <div class="card-body flex flex-col"> 
                        <div class="flex flex-row justify-between items-center">
                            <div class="h-6 text-3xl text-green-700"><MdSupervisedUserCircle /></div>
                            <span class="rounded-full flex items-center gap-2 text-white badge bg-teal-400 p-1 text-sm">
                                20%
                                <MdOutlineKeyboardArrowUp className='text-xl' />
                            </span>
                        </div>

                        <div class="mt-8">
                            <h1 class="h5 num-4 font-semibold">400k</h1>
                            <p>total user</p>
                        </div>                
                    </div>
                </div>
                <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-6 sm:grid-cols-1 lg:grid-cols-2 mt-6'>
            <div className="card">
                <div className="py-3 px-4 flex flex-row justify-between">
                    <h2 className='text-2xl font-semibold'>
                        <span className='num-5'>$200</span>k
                        <p className='font-normal text-sm text-gray-500'>total sale</p>
                    </h2>
                    <span></span>
                </div>
                <ApexCharts options={totalSellOptions} series={totalSellSeries} type="area" height={200} />
            </div>

            <div className="card">
                <div className="py-3 px-4 flex flex-row justify-between">
                    <h2 className='text-2xl font-semibold'>
                        <span className='num-5'>800</span>k
                        <p className='font-normal text-sm text-gray-500'>total user</p>
                    </h2>
                    <span></span>
                </div>
                <ApexCharts options={totalViewOptions} series={totalViewSeries} type="area" height={200} />
            </div>

        </div>
    </div>
  )
}

export default Dashboard
