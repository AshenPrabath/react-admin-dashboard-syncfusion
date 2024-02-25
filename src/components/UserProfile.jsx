import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context/ContextProvider';
import { Button } from '../components';
import { userProfileData, userProfileInfoData } from '../data/dummy';

const USerProfile = () => {
  const { handleClose, currentColor } = useStateContext();

  return (
    <div className='absolute top-16 right-0 h-auto dark:text-gray-200 bg-white dark:[#484B52] w-400 shadow-xl rounded-lg z-50 dark:bg-secondary-dark-bg '>
      <div className='flex justify-between items-center p-4 ml-4 '>
        <p className='font-semibold text-xl'>
          User Profile
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
      <div className='flex justify-start ml-4 p-3 items-center '>
        <img className='w-20 h-20 rounded-full mr-5 object-cover' src={userProfileInfoData.image} alt={userProfileInfoData.userName} />
        <div className=''>
          <p className='font-bold text-lg '>{userProfileInfoData.userName}</p>
          <p className='text-sm font-semibold'>{userProfileInfoData.designation}</p>
          <p className='text-sm font-thin'>{userProfileInfoData.email}</p>

        </div>
      </div>

      <div className='flex-col border-t-1 border-color p-0 ml-8 mr-8 mb-8'>
        <div className=' flex justify-center ' >
          <p></p>
          <div className='w-full '>
            {userProfileData.map((item, index) => (
              <div key={index} className='flex p-6 border-b-1 hover:cursor-pointer items-center hover:bg-slate-50 dark:hover:bg-slate-900'>
                <div className={`flex items-center justify-center mr-6 w-20 h-12 rounded-lg bg-[${item.iconBg}]`} style={{ color: item.iconColor }}>
                  {item.icon}
                </div>
                <div className='w-full'>
                  <h2 className='text-lg  '>{item.title}</h2>
                  <h2 className="text-sm">{item.desc}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='justify-center mt-5'>
          <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadius="10px"
            size="md"
            width="full"

          />
        </div>

      </div>
    </div>
  )
}

export default USerProfile