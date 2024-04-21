/* eslint-disable no-unused-vars */
import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { VscPrimitiveSquare } from 'react-icons/vsc'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

function Ecommerce () {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white data:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w:80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold'>Earning Datas</p>
              <p className='text-2xl'>$58.984.345</p>
              <earningData />
            </div>
          </div>
          <div>
            <Button
              color='white'
              bgColor='gray'
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl hover:drop-shadow-xl'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.color} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-788'>
          <div className='flex justify-between'>
            <p className='font-semibold text:xl'>
              Ingresos
            </p>
            <div className='flex items-center gap-4 '>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <VscPrimitiveSquare />
                </span>
                <span>Gastos</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span>
                  <VscPrimitiveSquare />
                </span>
                <span>Presupuesto</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color mt-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>
                    $76.124.456
                  </span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-600 ml-3 text-xs'>
                    30%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Presupuesto</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>
                    $18.000.345
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Gastos</p>
              </div>
              <div>
                <SparkLine
                  currentColor='gray'
                  id='line-sparkLine'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='red'
                />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor='bg-green-600'
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            <div>
              <Stacked
                width='320px'
                height='360px'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce