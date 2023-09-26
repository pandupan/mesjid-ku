import React from 'react'
import Image from 'next/image'

const HistoryOfCenter = () => {
  return (
    <div className="relative flex px-4 sm:px-10 xl:container flex-row justify-center items-center gap-24 pt-20 pb-32">
    <div className="flex flex-col gap-4">
      <div>
      <h3 className='font-bold'>
        Few Words About
      </h3>
    <h1 className="text-theme-secondary text-6xl font-bold">History Of Center</h1>
      </div>
      <p className="w-[470px] mt-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      </p>
      <h2 className='font-bold'>
        The Mosque is the #1 Islamic Center in the Country!
      </h2>
      <div className='flex flex-row gap-28'>
        <ul>
          <li>Astonishing Facilities</li>
          <li>Leads Charity Events</li>
          <li>Feeding Hungry People</li>
        </ul>
        <ul>
          <li>Helping Communities</li>
          <li>Schooling Children</li>
          <li>Providing Homes</li>
        </ul>
      </div>
      <button className="bg-[#1DBBB4] w-[154px] h-[43px] rounded-xl">
      <a className="place-self-center">Learn More</a>
    </button>
    </div>

    <div className="relative border-4 border-[#0C7C95] w-[523px] h-[523px] ">
      <div>
      <div className="absolute -top-10 -left-10 z-0">
      <div className="relative aspect-square w-[523px] h-[523px]">
        <Image 
          src="/images/mosque2.png" 
          alt="bg-vector" 
          fill={true} />
      </div>
    </div>
      </div>
    </div>
    <div className="absolute -bottom-40 -left-8 z-0">
      <div className="relative aspect-square w-[270px] h-[610px]">
        <Image 
          src="/images/bg-vector-3-3.png" 
          alt="bg-vector" 
          fill={true} />
      </div>
    </div>
  </div>
  )
}

export default HistoryOfCenter
