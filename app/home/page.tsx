import HeroSectionHP from '@/components/pages/HomePageT1/HeroSectionHP'
import HistoryOfCenter from '@/components/pages/HomePageT1/HistoryOfCenter'
import NamazTimings from '@/components/pages/HomePageT1/NamazTimings'
import PillarsOfIslam from '@/components/pages/HomePageT1/PillarsOfIslam'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSectionHP/>
      <NamazTimings/>
      <HistoryOfCenter/>
      <PillarsOfIslam/>
    </div>
  )
}

export default page
