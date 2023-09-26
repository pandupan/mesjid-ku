import React from 'react'

const NamazTimings = () => {
  return (
    <div className='px-4 sm:px-10 xl:container flex flex-col'>
      <div className='flex flex-col items-center my-10'>
        <h3 className='font-bold'>
          Associated Mosque
        </h3>
        <h1 className='text-theme-secondary text-6xl font-bold'>
          Namaz Timingz
        </h1>
      </div>
          <div className='w-[363px] bg-[#1DBBB4] place-self-center flex justify-center items-center mt-10'>
          <h3>
             Next In: <a className='text-white'> 5 hours 47 minutes 25 seconds </a> 
          </h3>
          </div>
      <div className='flex flex-col items-center'>
        <div>
          <div className='flex flex-row'>
            <div className='bg-[#EFFFFE] p-6'>
              <h1 className='text-2xl font-bold'>
                FAJR
              </h1>
              <p className='font-semibold'>
                begins: 6:10 AM
              </p>
              <p className='font-semibold'>
                Iqamah: 7:00 AM
              </p>
            </div>
            <div className='bg-white p-6'>
              <h1 className='text-2xl font-bold'>
                ZUHR
              </h1>
              <p className='font-semibold'>
                begins: 11:58 AM
              </p>
              <p className='font-semibold'>
                Iqamah: 1:30 AM
              </p>
            </div>
            <div className='bg-[#EFFFFE] p-6'>
              <h1 className='text-2xl font-bold'>
                ASR
              </h1>
              <p className='font-semibold'>
                begins: 2:10 AM
              </p>
              <p className='font-semibold'>
                Iqamah: 3:00 AM
              </p>
            </div>
            <div className=' p-6'>
              <h1 className='text-2xl font-bold'>
                FAJR
              </h1>
              <p className='font-semibold'>
                begins: 3:55 AM
              </p>
              <p className='font-semibold'>
                Iqamah: 3:55 AM
              </p>
            </div>
            <div className='bg-[#EFFFFE] p-6'>
              <h1 className='text-2xl font-bold'>
                ISYA
              </h1>
              <p className='font-semibold'>
                begins: 5:31 AM
              </p>
              <p className='font-semibold'>
                Iqamah: 8:00 AM
              </p>
            </div>
            <div className='bg-[#1DBBB4] text-white p-6 flex flex-col gap-2'>
              <h1 className='text-2xl font-bold'>
                JUMMAH
              </h1>
              <div>
              <p className='font-semibold'>
                begins: 12:20 AM
              </p>
              <p className='font-semibold'>
                Iqamah: 61:30 AM
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NamazTimings
