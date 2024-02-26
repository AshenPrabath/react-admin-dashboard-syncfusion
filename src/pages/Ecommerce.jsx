import React from 'react'
import { GoDotFill } from 'react-icons/go';
import { Stacked, Button, SparkLine, LineChart, OrdersTable } from '../components';
import { earningData, SparklineAreaData, recentOrdersData, productsPerformanceData, recentTransactionsData } from '../data/dummy';
import ProgressBar from '../components/ProgressBar';
import { useStateContext } from '../context/ContextProvider';


const Ecommerce = () => {

  const { currentColor } = useStateContext();

  return (
    <div className='mt-12'>

      {/*----- Hero Section ----*/}

      <div className='flex flex-wrap justify-between '>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$45,664.54</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center '>
          {earningData.map((item) => (
            <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
              <button style={{
                color: item.iconColor, backgroundColor: item.iconBg
              }}
                className='text-2xl placeholder-opacity-90 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
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

      {/*----- revenue Section ----*/}

      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl lg:w-3/5 sm:w-full'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoDotFill /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className=' m-4 pr-10'>

              <div>
                <p>
                  <span className='text-3xl font-semibold'>$107,355</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>

              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$47,355</span>

                </p>
                <p className='text-gray-500 mt-1'>
                  Expense
                </p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className='mt-10'>
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div >
              <Stacked
                width="320px"
                height="360px"
              />
            </div>
          </div>
        </div>

        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl lg:w-2/5 w-full '>
          <p className='text-xl font-semibold pb-4'>Revenue Growth</p>
          <LineChart />
        </div>
      </div>
      <div className='m-3'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-8 rounded-2xl w-full'>
          <p className='text-xl font-semibold pb-4'>Recent Orders</p>
          <OrdersTable dataSource={recentOrdersData} />
        </div>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 lg:p-12 p-6 rounded-2xl lg:w-8/12 sm:w-full '>
          <p className='text-xl font-semibold pb-4'>Products Performance</p>
          {productsPerformanceData.map((item, index) => (
            <div key={index} className='flex flex-wrap justify-start items-center pb-4 '>
              <div className='flex items-center lg:w-9/12'>
                <img className='w-24 h-20 rounded-md mr-5 object-cover ' src={item.ProductImage} alt={item.name} />
                <div>
                  <p className='text-xl text-gray-600 dark:text-gray-100 font-base '>
                    {item.productTitle}
                  </p>
                  <p className='text-gray-500 text-sm pt-1'>
                    {item.categories}
                  </p>
                </div>
              </div>
              <div className='flex items-center justify-between  lg:w-3/12 w-full lg:pt-0 pt-2'>
                <div className=' w-1/2 pr-2'>
                  <p className='pb-2'>{item.ratingString}</p>
                  <ProgressBar percentage={item.ratingPercentage} color={item.barColor} />
                  <p className='pt-2 text-sm'> {item.ratingPercentage} % Sold  </p>
                </div>
                <div className=''>
                  <p className='text-gray-400'>Earnings</p>
                  <p className='font-bold'>${item.Earnings.toString()}</p>
                </div>
              </div>
            </div>
          ))}


        </div>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-12 rounded-2xl lg:w-4/12 sm:w-full w-full items-center'>
          <div className='flex justify-between items-center pb-4'>
          <p className='text-xl font-semibold'>Recent Transactions</p>
          {recentTransactionsData.length > 7 && (
            <p className=" text-gray-500 hover:cursor-pointer hover:underline ">View All</p>
        )}
        </div>
          {recentTransactionsData.slice(0, 6).map((item, index) => (
            <div key={index} className='flex flex-wrap justify-start items-center pb-4  '>
              <div className='flex  items-center justify-between w-full'>
                <div className='flex items-center '>
                  <div className='text-3xl'>
                    {item.icon}
                  </div>
                  <div className='pl-6'>
                    <p className='text-lg text-gray-600 dark:text-gray-100 font-base '>
                      {item.Method}
                    </p>
                    <p className='text-xs text-gray-600 dark:text-gray-100 font-base '>
                      {item.Desc}
                    </p>
                  </div>
                </div>
                <p className={`text-base text-[${item.fontColor}] dark:text`}>
                  {item.Amount}
                </p>
              </div>
            </div>
          ))}
          <div className='flex text-sm text-gray-500 pt-3 justify-end items-center'>
          {recentTransactionsData.length.toString()} recent Transactions
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce