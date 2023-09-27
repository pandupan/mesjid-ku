import EventsBlog from '@/components/pages/HomePageT1/EventsBlog'
import HeroSectionHP from '@/components/pages/HomePageT1/HeroSectionHP'
import HistoryOfCenter from '@/components/pages/HomePageT1/HistoryOfCenter'
import NamazTimings from '@/components/pages/HomePageT1/NamazTimings'
import OurGallery from '@/components/pages/HomePageT1/OurGallery'
import PillarsOfIslam from '@/components/pages/HomePageT1/PillarsOfIslam'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSectionHP/>
      <NamazTimings/>
      <HistoryOfCenter/>
      <PillarsOfIslam/>
      <OurGallery/>
      <EventsBlog/>
    </div>
  )
}

export default page
