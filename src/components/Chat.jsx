import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context/ContextProvider';
import { Button } from '../components';
import { chatData } from '../data/dummy';


const Chat = () => {
  const { handleClose, currentColor } = useStateContext();
  return (
    <div className='absolute top-16 right-28 h-auto dark:text-gray-200 bg-white dark:[#484B52] w-300 shadow-xl rounded-lg z-50 dark:bg-secondary-dark-bg'>
      <div className='flex justify-between items-center p-3 ml-4 '>
        <p className='font-semibold text-xl'>
          Chat
        </p>
        <button
          className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          type='button'
          onClick={() => handleClose()}
          style={{
            color: 'rgb(153, 171, 180)',
            borderRadius: '50%'
          }}
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className='flex-col border-t-1 border-color p-0 ml-8 mr-8 mb-8'>
        <div className=' flex justify-center ' >
          <div>
            {chatData.map((item, index) => (
              <div key={index} className='flex  p-3 border-b-1 items-center hover:cursor-pointer'>
                <img className='w-16 h-16 rounded-full mr-5 object-cover ' src={item.image} alt={item.name} />
                <div className='w-full'>
                  <h2 className='font-bold text-sm '>{item.person}</h2>
                  <div className='flex justify-between items-center mt-2'>
                    <p className='text-xs text-gray-600 dark:text-gray-400 font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[160px]'>{item.message}</p>
                    <p className='text-xs font-semibold mt-2 ml-3'>{item.time}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='justify-center mt-5'>
          <Button
            color="white"
            bgColor={currentColor}
            text="See All Messages"
            borderRadius="10px"
            size="md"
            width="full"

          />
        </div>

      </div>
    </div>

  )
}

export default Chat